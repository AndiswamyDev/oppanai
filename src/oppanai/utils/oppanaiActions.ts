import { CONSTANTS } from '../constants';
var zoomInCount = 0;
var zoomOutCount = 0;

export const handleDownload = (imageRef: any, imageFile: HTMLImageElement, rotateStyle: number, flipAxis: string) => {
  console.log('flipAxis', flipAxis);
  const editedImage: any = document.getElementById(CONSTANTS.OPPANAI_EDITING_IMAGE);
  const canvas = document.createElement('canvas');
  canvas.width =
    editedImage?.style.transform.includes(90) || editedImage?.style.transform.includes(270)
      ? imageRef.naturalHeight
      : imageRef.naturalWidth;
  canvas.height =
    editedImage?.style.transform.includes(90) || editedImage?.style.transform.includes(270)
      ? imageRef.naturalWidth
      : imageRef.naturalHeight;
  const ctx: any = canvas.getContext('2d');
  //Define translation to place rotate position
  if (rotateStyle === 90) ctx?.translate(canvas.width, 0);
  else if (rotateStyle === 180) ctx?.translate(canvas.width, canvas.height);
  else if (rotateStyle === 270) ctx?.translate(0, canvas.height);
  else ctx?.translate(0, 0);
  //Rotate image by converting Degree into Radian
  ctx?.rotate((rotateStyle * Math.PI) / 180);
  if (flipAxis === 'X') {
    ctx?.translate(canvas.width, 0);
    ctx?.scale(-1, 1);
  } else {
    ctx?.translate(0, canvas.height);
    ctx?.scale(1, -1);
  }
  ctx?.drawImage(imageRef, 0, 0);
  ctx?.restore();
  //start download the edited image
  startImagedownload(imageFile.name.split('.')[0], canvas.toDataURL());
  return 0;
};

export const startImagedownload = (imageFileName: string, image: string) => {
  var element = document.createElement('a');
  element.setAttribute('href', image);
  element.setAttribute('download', imageFileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  return 0;
};

export const zoomOut = (zoomOutCount: number) => {
  zoomInCount = 0;
  const imageWrapper: any = document.getElementById(CONSTANTS.OPPANAI_EDITING_IMAGE);
  const currentWidth = imageWrapper?.clientWidth as number;
  imageWrapper.style.width = currentWidth - zoomOutCount + 'px';
  return 0;
};

export const zoomIn = (zoomInCount: number) => {
  zoomOutCount = 0;
  const imageWrapper: any = document.getElementById(CONSTANTS.OPPANAI_EDITING_IMAGE);
  const currentWidth = imageWrapper?.clientWidth as number;
  imageWrapper.style.width = currentWidth + zoomInCount + 'px';
  return 0;
};

window.addEventListener('wheel', function (event) {
  handleWheelEvent(event);
});

export const handleWheelEvent = (event: WheelEvent) => {
  const oppanaiEditorWrapper = document?.getElementById(CONSTANTS.OPPANAI_EDITOR_WRAPPER);
  if (oppanaiEditorWrapper) {
    if (event.deltaY < 0) {
      zoomInCount++;
      zoomIn(zoomInCount);
    } else if (event.deltaY > 0) {
      zoomOutCount++;
      zoomOut(zoomOutCount);
    }
  }
  return 0;
};
