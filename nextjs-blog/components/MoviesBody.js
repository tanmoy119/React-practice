import styled from 'styled-components'
import MoviesSlider from "./MoviesSlider"
import MoviesSlider1 from "./MoviesSlider1"
import {useRouter} from 'next/router';

const MoviesBody = () => {

  return (
    <>
      <Container>
            <MoviesSlider/>
            <MoviesSlider1/>
      </Container>
      </>
  )
}

export default MoviesBody;

const Container = styled.main`
        min-height: calc(100vh - 70px);
        padding: 0 calc(3.5vw + 5px);
        position: relative;

         &:before {
            background: url("img3.png") center center / cover
            no-repeat fixed;
            content:"";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index:-1;

         }
            


        


`
