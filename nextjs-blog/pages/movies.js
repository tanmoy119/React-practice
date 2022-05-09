import Navbar from "../components/Navbar";
import {useRouter} from 'next/router';
import MoviesBody from "../components/MoviesBody";



const Movies = () => {
  return (
    <>
      <Navbar />
      <MoviesBody/>
    
    </>
  );
};

export default Movies;
