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
  .form-center {
    display: grid;
    row-gap: 1rem;
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

  .sets-form{
    margin-top: 2rem
  }

  .chart-container{
    margin-top: 2rem;
    width: 100%;
    height: 400px;
  }

  .sets-records-container, .weight-records-container{
    margin-top: 2rem;
    overflow-x: scroll
  }

  .sets-records, .weight-records{
    min-width: 750px;
    padding: 15px;
    background-color: var(--backgroundColor);
    border-radius: var(--borderRadius);
  }

  .sets-headers, .set-record{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  .weight-headers, .weight-record{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .no-sets-notification{
    text-align: center;
    margin-top: 2rem;
  }

  .set-actions{
    display: flex;
    align-items: center;
    justify-content: begin;
    column-gap: 15px;
    .icon{
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .delete-icon{
      color: var(--red-dark);
      padding: 0;
      cursor: pointer;
    }
    .edit-icon, .view-icon{
      color: var(--primary-700);
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      column-gap: 1rem;
    }
    .preferences-container{
      grid-column: 1/4;
    }
    .preferences{
      grid-template-columns: repeat(5, 1fr);
    }
    .sets-records-container, .weight-records-container{
      overflow-x: hidden
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper