import {
  memo,
  useCallback,
  useState,
  Fragment,
  FunctionComponent,
} from 'react';

import { ProductType } from 'Product/types/ProductType';
import {
  useIntersectionObserver,
  IntersectionStatus,
} from '../hooks/useIntersectionObserver';

import { imageWrapperStyle, imageStyle } from './styles';
import { useImageOnLoad, ImageOnLoadType } from './hooks/useImageOnLoad';

type ImageUrlType = Pick<ProductType, 'imageUrl' | 'thumbUrl'>;
type ImageAttrType = { imageAlt: string };

export type ImagePropsType = ImageUrlType & ImageAttrType;

export const Image: FunctionComponent<ImagePropsType> = ({
  imageUrl,
  thumbUrl,
  imageAlt,
}) => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement>();
  const wrapperCallback = useCallback((node) => {
    setWrapperRef(node);
  }, []);

  const { isIntersecting }: IntersectionStatus =
    useIntersectionObserver(wrapperRef);

  const { handleImageOnLoad, imageVisibility, imageOpactity }: ImageOnLoadType =
    useImageOnLoad();

  return (
    <div ref={wrapperCallback} style={imageWrapperStyle}>
      {isIntersecting ? (
        <Fragment>
          <img
            src={thumbUrl}
            alt={imageAlt}
            width="100%"
            style={{ ...imageStyle, ...imageVisibility }}
          />
          <img
            onLoad={handleImageOnLoad}
            src={imageUrl}
            alt={imageAlt}
            width="100%"
            style={{ ...imageStyle, ...imageOpactity }}
          />
        </Fragment>
      ) : null}
    </div>
  );
};

export default memo(Image);
