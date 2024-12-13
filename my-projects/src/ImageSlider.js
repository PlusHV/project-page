import { useState } from "react";

const importImage = (imageName) => {
  return require('./images/' + imageName);
};

const ImageSlider = ({slides}) => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const sliderStyles = {

		width: "100%",
		height: "600px",
		position: "relative"

	};

	const imagePath = importImage(slides[currentIndex].url);

	const slideStyles = {
		
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		//backgroundImage: imagePath,
		backgroundImage: `url(${imagePath})`,


	}

	const leftArrowStyles = {

		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		left: '0px',
		fontSize: '45px',
		color: '#000',
		zIndex: 1,
		cursor: "pointer",

	}
	const rightArrowStyles = {

		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		right: '0px',
		fontSize: '45px',
		color: '#000',
		zIndex: 1,
		cursor: "pointer",

	}

	const goToPrevious = () => {

		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);

	}

	const goToNext = () => {

		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);

	}

	const dotsContainerStyles = {
		display: 'flex',
		justifyContent: 'center'
	}

	const dotStyles = {
		margin: '0 3px',
		cursor: 'pointer',
		fontSize: '40px',
		color: 'grey',
	}
	const selectedDotStyles = {
		margin: '0 3px',
		cursor: 'pointer',
		fontSize: '40px',
		color: 'black',
	}

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex);
	}


	

	return(
		<div style = {sliderStyles}>

			<div style = {leftArrowStyles} onClick = {goToPrevious}>❰</div>
			<div style = {rightArrowStyles} onClick = {goToNext}>❱</div>

			
			<div style = {slideStyles}> 

			</div>

			<div style = {dotsContainerStyles}>
				{slides.map( (slide, slideIndex) => (
						
						slideIndex === currentIndex ? 
						<div key = {slideIndex} style = {selectedDotStyles} onClick = {() => goToSlide(slideIndex) }>
						•
						</div>

						:<div key = {slideIndex} style = {dotStyles} onClick = {() => goToSlide(slideIndex) }>
						•
						</div>

						

						
			))}

			</div>

		</div>
	)

}

export default ImageSlider;