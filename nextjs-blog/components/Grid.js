import styled from "styled-components";


const Grid = () => {
  return (
        <Container>
            <div className="main">
            <div className='items-1'>items-1</div>
            <div className='items-2'>items-2</div>
            <div className='items-3'>items-3</div>
            <div className='items-4'>items-4</div>
            <div className='items-5'>items-5</div>
            <div className='items-6'>items-6</div>
            <div className='items-7'>items-7</div>
            <div className='items-8'>items-8</div>
            <div className='items-9'>items-9</div>
            </div>
        </Container>
  )
}

export default Grid;

const Container= styled.div`
    min-height: calc(100vh - 70px);
    display:flex;
    justify-content:center;
    align-items:center;

    .main{

        width:1200px;
        background:gray;

        display:grid;
        grid-template-columns: 400px 400px 400px;
        grid-template-rows: 200px 200px 200px;

        .items-1{
            background-color:green;
        }
        .items-2{
            background-color:yellow;
        }
        .items-3{
            background-color:blue;
        }
        .items-4{
            background-color:gray;
        }
        .items-5{
            background-color:pink;
        }
        .items-6{
            background-color:purple;
        }
        .items-7{
            background-color:red;
        }
        .items-8{
            background-color:black;
        }
        .items-9{
            background-color:orenge;
        }
    
    }

  


`