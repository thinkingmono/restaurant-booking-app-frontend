import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--black-2);
      min-height: 100vh;
      height: 100%;
      width: 220px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
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
    }
    .nav-links {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-text);
      padding: 1rem 0;
      padding-left: 2.5rem;
      transition: var(--transition);
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-text);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-text);
    }
  }
`
export default Wrapper