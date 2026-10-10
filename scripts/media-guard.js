
/* Discourage saving public media through ordinary right-click/drag interactions.
   These measures do not prevent screen captures, network inspection, or recording. */
(() => {
  const isMedia = target => target instanceof Element && !!target.closest('img, video, picture, canvas');
  document.addEventListener('contextmenu', event => {
    if (isMedia(event.target)) event.preventDefault();
  }, true);
  document.addEventListener('dragstart', event => {
    if (isMedia(event.target)) event.preventDefault();
  }, true);
  for (const vid of document.querySelectorAll('video')) {
    vid.controlsList?.add('nodownload');
    vid.controlsList?.add('noremoteplayback');
    vid.disablePictureInPicture = true;
  }
})();
