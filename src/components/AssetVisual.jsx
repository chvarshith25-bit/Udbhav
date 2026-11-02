import { useState } from 'react';
// Failed/missing assets always restore the designed placeholder, not a broken image.
export default function AssetVisual({ asset, children, className = '', eager = false }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!asset?.src || failedSrc === asset.src) return children;
  return <img className={className} src={asset.src} alt={asset.alt || ''} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onError={() => setFailedSrc(asset.src)}/>;
}
