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
  
  .section-title-btn-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.76rem;
    grid-column: 1 / 3;
    h3{
      margin-bottom: 0;
    }
    .btn-container{
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
    }
    button, a{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      column-gap: 0.5rem;
    }
  }

  .table-selection-section, .table-preferences, .order-selection-section{
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

  .table-card, .dish-card {
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
      .category-tag{
        position: absolute;
        top: 0.625rem;
        left: 0.625rem;
        z-index: 2;
        background: var(--primary-btn);
        color: var(--white);
        padding: 0.15rem 0.875rem;
        box-shadow: var(--shadow-2);
        border-radius: var(--borderRadius);
      }
      
      .add-to-order-btn{
        position: absolute;
        top: 0.625rem;
        right: 0.625rem;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-btn);
        font-size: 1rem;
        color: var(--white);
        padding: 0.5rem;
        border: 1px solid var(--white);
        box-shadow: var(--shadow-2);
        border-radius: var(--borderRadius);
        transition: var(--transition);
      }
      
      .add-to-order-btn:hover{
        background-color: var(--black);
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

      .availability-check-tag{
        width: 100%;
        background-color: var(--black);
        border-radius: var(--borderRadius);
        color: var(--grey);
        padding: 5px 10px;
        font-weight: 600;
        svg{
          color: var(--primary-btn);
        }
      }
    }
    
    .dish-info{
      display: flex;
      flex-direction: column;
      row-gap: 0.4rem;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 0.5rem;
      h4{
        text-align: center;
        color: var(--black);
        margin-bottom: 0;
      }
      .dish-price{
        color: var(--primary-btn);
        font-size: 1rem;
      }
    }
  }

  .table-card-container{
    h4{
      text-align: center;
    }
  }

  .table-card:hover, .dish-card:hover {
    border: 2px solid var(--primary-btn);
    box-shadow: var(--shadow-4);
  }

  .table-card img, .dish-card img{
    transform: scale(1);
    transition: var(--transition);
  }

  .table-card:hover img, .dish-card:hover img{
    transform: scale(1.1);
  }

  .dishes-filters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    .filter-section-title{
      margin-bottom: 1.38rem;
      border-bottom: 1px dashed var(--primary-btn);
      h4{
        margin-bottom: 0;
      }
      .filters-toggle-btn{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: transparent;
        border: none;
        color: var(--primary-btn);
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }

  .categories-filters, .preferences-filters{
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin-bottom: 1.38rem;
    height: 0;
    overflow: hidden;
    padding: 0 1rem;
    .filter-btn{
      background-color: transparent;
      border: none;
      padding: 0;
      text-align: left;
      color: var(--grey-900);
      font-weight: 300;
      cursor: pointer;
    }
    .filter-btn:hover, .filter-btn.active{
      color: var(--primary-btn);
    }
  }
  .show{
    height: auto;
  }

  .dishes-results{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
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

  .booking-summary-container{
    .user-information-container{
      background: var(--black-2);
      border-radius: var(--borderRadius);
      padding: 0.75rem;
      .user-information{
        padding: 0 0.75rem;
        p{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
    h4{
      border-bottom: 1px dashed var(--primary-btn);
      text-align: center;
    }
    .order-container{
      p{
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
      }
      .no-items{
        text-align: center;
      }
    }
  }

  @media (min-width: 640px) {
    .user-data-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }

    .booking-user-info, .table-selection-section, .order-selection-section, .booking-summary-section{
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
    .dishes-results{
      grid-template-columns: repeat(2, 1fr);
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

    .order-container{
      grid-column: 1 / 3;
      margin-top: 2rem;
      background: var(--black-2);
      padding: 1.5rem;
      border-radius: var(--borderRadius);
      .dishes-list{
        display: flex;
        flex-direction: column;
        padding: 0 0.75rem;
        .dish-item{
          display: grid;
          grid-template-columns: 5rem 2fr repeat(3, 1fr) 2rem;
          padding: 0.5rem;
          transition: var(--transition);
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: 1px solid transparent;
            border-radius: var(--borderRadius);
            transition: var(--transition);
          }
          button{
            background: transparent;
            color: var(--primary-btn);
            border: none;
            font-size: 1rem;
            cursor: pointer;
            padding: 0;
          }
        }
        .dish-item:hover{
          background: var(--black);
          img{
            border: 1px solid var(--primary-btn);
          }
        }
        .dishes-list-headers{
          display: grid;
          grid-template-columns: 5rem 2fr repeat(3, 1fr) 2rem;
          border-bottom: 1px solid var(--black);
          margin-bottom: 1rem;
          padding: 0 0.5rem;
          p{
            margin: 0;
          }
        }
      }
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

    .dish-card{
      height: 100%;
      width: 100%;
    }
    
    .booking-summary-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1280px){
    .order-selection-container{
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 1.4rem;
    }
    .dishes-results{
      grid-template-columns: repeat(3, 1fr);
    }
    .dishes-filters{
      display: flex;
      flex-direction: column;
      background-color: var(--black-2);
      padding: 0.75rem;
      border-radius: var(--borderRadius);
    }
  }
  
  @media (min-width: 1536px){
    .dishes-results{
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default Wrapper