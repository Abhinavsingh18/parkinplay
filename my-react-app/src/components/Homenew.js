import React from 'react';
import AppBanner from './AppBanner';
import Rnav from './Rnav';
import Bottomtab from './Bottomtab';
import Headerafter from './Headerafter';
import { useParams } from 'react-router-dom';

function Homenew(props) {
  const { username } = useParams();
  return (
    <div>
      <Headerafter username={username}/>
      <AppBanner />
      <Rnav />
      <Bottomtab username={username} />
    </div>
  );
}

export default Homenew;