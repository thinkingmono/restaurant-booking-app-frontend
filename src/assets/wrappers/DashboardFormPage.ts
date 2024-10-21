import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--black);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  .title-actions{
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.38rem;
  }
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    h2{
      font-size: 2.5rem;
      color: var(--primary-title);
    }
  }
  .profile-information{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .form-row {
    margin-bottom: 0;
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

  .booking-user-info{
    margin-bottom: 2rem;
  }
  
  .user-data-container{
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }

  .table-selection-section, .table-preferences{
    margin-bottom: 2rem;
  }

  .preferences-fields-container{
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }

  .results-container{
    display: grid;
    gap: 1rem;
    margin: 1rem auto;
  }

  .table-card {
    background-color: #fafafa;
    border: 2px solid transparent;
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
    transition: var(--transition);

    .img-container {
      position: relative;
      overflow: hidden;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.35);
        z-index: 1;
      }

      .zone-tag {
        position: absolute;
        top: 0.625rem;
        right: 0.625rem;
        z-index: 2;
        background: var(--primary-btn);
        color: var(--white);
        padding: 0.15rem 0.875rem;
        box-shadow: var(--shadow-2);
        border-radius: var(--borderRadius);
      }
    }

    .table-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      row-gap: 0.5rem;
      padding: 0.75rem 0.5rem;
      color: var(--black);

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.25rem;
      }

      .btn {
        width: 100%;
        margin-top: 0;
      }
    }
  }
  
  .table-card-container{
    h4{
      text-align: center;
    }
  }

  .table-card:hover {
    border: 2px solid var(--primary-btn);
    box-shadow: var(--shadow-4);
  }

  .table-card img {
    transform: scale(1);
    transition: var(--transition);
  }

  .table-card:hover img {
    transform: scale(1.1);
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }

  @media (min-width: 640px) {
    .user-data-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }

    .booking-user-info{
      padding: 3% 2%;
      margin-bottom: 1.25rem;
      border: 1px dashed var(--primary-btn);
    }

    .table-selection-section{
      padding: 3% 2%;
      margin-bottom: 1.25rem;
      border: 1px dashed var(--primary-btn);
    }

    .results-container{
      grid-column: 1 / 3;
      grid-template-columns: repeat(2, 1fr);
    }
    .preferences-fields-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }

  @media (min-width: 768px){
    .profile-information{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      .preferences-container{
        grid-column: 1 / 4;
        .preferences{
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }

    .table-preferences{
      grid-column: 1/4;
    }
  }

  @media (min-width: 992px) {
    .profile-information{
      .preferences-container{
        .preferences{
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
  
  @media (min-width: 1024px) {
    .profile-information{
      .preferences-container{
        .preferences{
          grid-template-columns: repeat(5, 1fr);
        }
      }
    }
    
    .table-selection-section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .table-preferences{
      grid-column: 1 / 2;
    }

    .preferences-fields-container{
      grid-template-columns: repeat(2,1fr);
    }

    .table-card-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .table-card{
      height: 100%;
      width: 90%;
    }

    .results-container{
      display: grid;
      grid-column: 1 / 4;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Wrapper