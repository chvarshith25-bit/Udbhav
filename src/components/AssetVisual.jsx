import { useId, useState } from 'react';
// Failed/missing assets always restore the designed placeholder, not a broken image.
export default function AssetVisual({ asset, children, className = '', eager = false }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const id = `asset-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  if (!asset?.src || failedSrc === asset.src) return children;
  const onError = () => setFailedSrc(asset.src);
  // Retain the previous logo's original colors while masking its white plate.
  if (asset.whiteBackgroundMask) return <svg className={className} viewBox="0 0 1000 355" role="img" aria-label={asset.alt}>
    <defs><filter id={`${id}-alpha`} filterUnits="userSpaceOnUse" x="0" y="0" width="1000" height="355" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -0.638 -2.145 -0.217 0 3"/></filter></defs>
    <image href={asset.src} width="1000" height="355" filter={`url(#${id}-alpha)`} onError={onError}/>
  </svg>;
  return <img className={className} src={asset.src} srcSet={asset.srcSet} sizes={asset.sizes} alt={asset.alt || ''} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onError={onError}/>;
}
