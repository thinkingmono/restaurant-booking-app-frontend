import style from 'styled-components';


const Wrapper = style.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--black);
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 1.875rem;
      color: var(--primary-title);
      margin: 0.75rem 0 0.5rem;
    }
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    color: var(--white);
    cursor: pointer;
    display: flex;
    align-items: center;
  }  
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    margin-top: 0;
    font-weight: 400;
    text-transform: capitalize;
    .icon{
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  .dropdown {
    position: absolute;
    top: calc(var(--nav-height) - 10px);
    right: 0;
    min-width: 12.5rem;
    width: 100%;
    background: var(--black);
    box-shadow: var(--shadow-2);
    padding: 0.75rem 0.5rem;
    text-align: right;
    visibility: hidden;
    border-radius: var(--borderRadius);
    overflow: hidden;
    span{
      display: block;
      width: 100%;
      border-bottom: 0.5px solid;
      margin-bottom: 5px;
      color: var(--primary-title);
    }
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    display: block;
    background: transparent;
    border-color: transparent;
    color: var(--primary-text);
    text-transform: capitalize;
    cursor: pointer;
    padding: 0.25rem;
    width: 100%;
    text-align: right;
    border: none;
  }
  .dropdown-btn:hover{
    color: var(--primary-btn);
  }

  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 10;

    .nav-center {
      width: 90%;
    }
    // .logo {
    //   display: none;
    // }
    .logo-text {
      display: block;
    }
  }
`
export default Wrapper;