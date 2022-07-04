import { lazy, Suspense, useState } from 'react';

export default function About(){
  const [flag, setFlag] = useState(true);
  let LazyComponent = null;

  if (flag) {
    LazyComponent = lazy(() => import('./a'));
  } else {
    LazyComponent = lazy(() => import('./b'));
  }

  return (
    <>
      <div>About页</div>
      <button onClick={() => setFlag(!flag)}>切换flag</button>
      <Suspense fallback={<div>Loading123</div>}>
         <LazyComponent />
       </Suspense>
    </>
  )
}