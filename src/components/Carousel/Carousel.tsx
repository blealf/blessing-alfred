import 'swiper/css/bundle';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = ({ photos, imageStyle }: { photos: string[], imageStyle: any}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => {/* console.log('slide change') */}}
      onSwiper={(swiper) => {/* console.log(swiper) */}}
    >
      {photos?.map((photo) => (
        <SwiperSlide>
          <img
            src={photo}
            alt="" style={imageStyle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel

// import React from 'react'

// const Carousel = ({ photos }: { photos: string[]}) => {
//   const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0)
//   return (
//     <div 
//       style={{ width: '100%', height: '100%', margin: '0 auto', border: '1px solid red' }} 
//       onClick={() => {
//         const nextIndex = selectedPhotoIndex + 1 >= photos.length ? 0 : selectedPhotoIndex + 1
//         setSelectedPhotoIndex(nextIndex)
//       }}
//     >
//       <img
//         src={photos[selectedPhotoIndex]}
//         alt="" 
//         style={{ maxWidth: '1115px', maxHeight: '300px', height: '300px', width: '100%', objectFit: 'contain' }}
//       />
//     </div>
//   )
// }

// export default Carousel