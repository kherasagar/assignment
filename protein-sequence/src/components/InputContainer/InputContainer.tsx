import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchSequence } from "../../actions/Sequence/SequenceActions";
import { fetchTranscript } from "../../actions/Transcript/TranscriptActions";
import { StoreState } from "../../reducers";
import Navbar from "../Navbar/Navbar";
import { TranscriptContainer } from "../Transcript/TranscriptContainer";

import './InputContainer.scss';

 export const InputContainer = () => {
    const dispatch = useDispatch();
    const [gene, setGene] = useState('');
    const [position, setPosition] = useState('');
    const [letter, setLetter] = useState('');
    const positionLeft = parseInt(position) - 10;
    const transcript = useSelector((state: StoreState) => state.transcript);
    const transcriptIds = transcript.data?.Transcript?.map((x: { id: any; })=>x.id);
    const seq = useSelector((state: StoreState) => state.sequence);

    const handleClick = () => {
      dispatch(fetchTranscript(gene));
    }

    useEffect(()=>{
      transcriptIds?.length > 0 && dispatch(fetchSequence(transcriptIds));
     // eslint-disable-next-line 
    },[transcriptIds?.length]);

    const isDisabled = gene.length === 0 || position.length === 0 || letter.length ===0 || seq.loading || transcript.loading;

    return (
      <>
        <div className='inputContainer'>
          <input type="text" placeholder="Gene Symbol" onChange={e => setGene(e.target.value)} />
          <input type="number" placeholder="Position" onChange={e => setPosition(e.target.value)} />
          <input type="text" placeholder="Letter" onChange={e => setLetter(e.target.value)} />
          <input type="button" onClick={handleClick} value='Get Transcripts' disabled={isDisabled} />
        </div>
        {transcript.loading || seq.loading ? <p className='text-center'>Loading...</p> :
        <Router>
          <Navbar />
          <Switch>
            <Route
                exact
                path="/"
                render={props => (
                  <TranscriptContainer {...props} position={position} letter={letter} />
                )}
              />
            <Route
                exact
                path="/TranscriptContainer"
                render={props => (
                  <TranscriptContainer {...props} position={positionLeft.toString()} letter={letter} />
                )}
              />
          </Switch>
        </Router>
        }
      </>
    );
};


