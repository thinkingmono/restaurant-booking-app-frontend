import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  .welcome-container{
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .welcome-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    .info{
      text-align: center;
      padding: 2rem;
      h1{
        font-size: 3.5rem;
        color: var(--white);
        margin-bottom: 0px;
      }
      p{
        font-size: 0.875rem;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.38rem;
        h1{
          margin: 0;
          color: var(--primary-title);
        }
      }
    }
  }
  .form-container{
    background-color: var(--white);
    padding: 0 1.5rem;
    .form {
      width: 100%;
      max-width: 450px;
      border: 1px dashed var(--primary-title);
      h3 {
        text-align: center;
      }
      p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
      }
      .btn {
        margin-top: 1rem;
      }
      .member-btn {
        background: transparent;
        border: transparent;
        color: var(--primary-btn);
        cursor: pointer;
      }
      .preferences-container{
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        margin: 15px 0px;
      }
      .preferences-container p{
        text-align: justify
      }
      .preferences{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .preference{
        display: flex;
        align-items: center;
        column-gap: 5px;
        margin-bottom: 5px
      }

      .preference label{
        line-height: 1.5;
      }
    }
  }

  @media (min-width: 1024px){
    .welcome-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      padding: 0;
    }
    .welcome-card{
      .info{
        h1{
          font-size: 4.5rem;
        }
      }
    }
    .form-container{
      border: 1px solid var(--grey);
      .form{
        border: 1px solid transparent;
      }
    }
  }
`
export default Wrapper