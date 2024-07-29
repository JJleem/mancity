import React from "react";
import {
  Picture,
  PictureSpecial,
  PictureSpecialNum,
  PictureText,
} from "../../pages/NewsDetail/StyleNewsDetail";

interface pictureType {
  [key: string]: string;
}
interface PictureSpecialComponentProps {
  picture?: pictureType;
}

const PictureSpecialComponent: React.FC<PictureSpecialComponentProps> = ({
  picture,
}) => {
  if (!picture) {
    return <div></div>;
  }

  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => {
        const imgSrc = picture[`pic${index + 1}` as keyof pictureType];
        const description = picture[`sub${index + 1}` as keyof pictureType];

        return imgSrc ? (
          <PictureSpecial key={`pic${index + 1}`}>
            <PictureText>
              <PictureSpecialNum> {index + 1}</PictureSpecialNum>
              {description || null}
            </PictureText>
            <Picture imgs={imgSrc}></Picture>
          </PictureSpecial>
        ) : null;
      })}
    </div>
  );
};

export default PictureSpecialComponent;
