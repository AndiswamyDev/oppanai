import {CONSTANTS} from '../constants';

export const handleDownload = (imageRef: any, imageFile: ImageEncodeOptions, rotateStyle: number) => {
    const editedImage: any = document.getElementById(CONSTANTS.OPPANAI_EDITING_IMAGE);
    const canvas = document.createElement('canvas');
    canvas.width = (editedImage.style.transform.includes(90) || editedImage.style.transform.includes(270)) ? imageRef.naturalHeight : imageRef.naturalWidth;
    canvas.height = (editedImage.style.transform.includes(90) || editedImage.style.transform.includes(270)) ? imageRef.naturalWidth : imageRef.naturalHeight;
    const ctx: any = canvas.getContext('2d');
    //Define translation to place rotate position
    if (rotateStyle === 90) ctx.translate(canvas.width, 0);
    else if (rotateStyle === 180) ctx.translate(canvas.width, canvas.height);
    else if (rotateStyle === 270) ctx.translate(0, canvas.height);
    else ctx.translate(0, 0)
    //Rotate image by converting Degree into Radian
    ctx.rotate(rotateStyle * Math.PI / 180);
    ctx.drawImage(
        imageRef,
        0, 0
    )
    ctx.restore();
    return canvas;
}