import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Transcript } from '../../models/Transcript';
import { StoreState } from '../../reducers';

import './TranscriptCotainer.scss';

export type TranscriptContainerProps = {
  position: string;
  letter: string;
  pageNumber: number;
};

export const TranscriptContainer = (props: any) => {
  const seq = useSelector((state: StoreState) => state.sequence);
  const ids = seq.data?.filter((x: { seq: { charAt: (arg0: string) => string; }; })=>x.seq.charAt(props.position) === props.letter);

  const transcript = useSelector((state: StoreState) => state.transcript);

  const [pageNumber, setPageNumber]= useState(1);
  const [transcriptNumber]= useState(1);

  const currentPageNumber = (pageNumber * transcriptNumber) - 1;

  useEffect(()=>{
      setPageNumber(1);
  },[props])

  const handlePrev =()=>{
      if(pageNumber === 1) return
      setPageNumber(pageNumber - 1)
  }
  const handleNext =()=>{
      setPageNumber(pageNumber + 1)
  }

  const data = transcript.data.Transcript?.filter((el: { id: any; }) => {
    return ids.find((element: { id: any; }) => {
       return element.id === el.id;
    });
 });

 const paginatedTranscripts = data?.splice(currentPageNumber, transcriptNumber);

 const listItems = paginatedTranscripts?.map((item: Transcript) =>
 <div className='transcript' key={item.id}>
  <h4>Transcripts for letter {props.letter} at position {props.position}</h4>
  <li>ID: {item.id}</li>
  <li>Assembly Name: {item.assembly_name}</li>
  <li>Version: {item.version}</li>
  <li>Display Name: {item.display_name}</li>
  <li>Species: {item.species}</li>
  <li>Parent: {item.Parent}</li>
  <li>Start: {item.start}</li>
  <li>End: {item.end}</li>
  <li>Strand: {item.strand}</li>
  <li>Source: {item.source}</li>
  <li>Bio Type: {item.biotype}</li>
  <li>Logic Name: {item.logic_name}</li>
  <li>Sequence Region Name: {item.seq_region_name}</li>
  <li>Is Canonical: {item.is_canonical}</li>
  <hr/>
  <div>Page {pageNumber} </div>
    <div className='pagination'>
      <button onClick={handlePrev} disabled={pageNumber===1}>prev</button>
        <button onClick={handleNext} disabled={pageNumber===data?.length+1}>next</button>
    </div>
</div>
);
  
  return (
    transcript.error || seq.error ? <p className='text-center'>Failed to load transcripts. Please tray again.</p> :
    transcript.loading || seq.loading ? 
      <p className='text-center'>Loading...</p> : 
        data?.length === 0 ? 
          <p className='text-center'>No data available.</p> :
            <>
            {listItems}
            </>
  );
};