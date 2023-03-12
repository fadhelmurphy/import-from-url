import PropTypes from "prop-types";

const menulist = [
  {
    text: "HOME",
    active: true,
  },
  {
    text: "About",
    active: false,
  },
  {
    text: "Contact",
    active: false,
  },
];

const SharedNavbar = ({ title, menu, background, color }) => (
  <>
  <style jsx>
    {`
    .header {
        
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                font-weight: 700;
    }
    `}
  </style>
    <style jsx global>
      {`
        .header {
          background: ${background};
          color: ${color};
          text-align: center;
          padding: 20px 0;
        }
        .header-inner {
          max-width: 1500px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .header-left h1 {
            font-size: 3rem;
          text-transform: uppercase;
        }

        .header-right a {
          text-transform: uppercase;
          text-align: center;
          margin: 0 1.89em;
          padding: 0.618em 0;
        }

        .header-right a:hover:not(.active) {
          color: rgb(237 77 0);
        }

        .header-right a.active {
          color: ${background};
          padding: 0.618em 1.89em;
          background: rgb(237 77 0);
          border-radius: 30px;
        }
      `}
    </style>
    <div className="header">
      <div className="header-inner">
        <div className="header-left">
          <h1>{title}</h1>
        </div>
        <div class="header-right">
          {menu.map(({ link = null, text, active }) => (
            <a
              {...(active ? { class: "active" } : {})}
              href={link || "javascript:void(0)"}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  </>
);

SharedNavbar.PropTypes = {
  title: PropTypes.string,
  menu: PropTypes.array,
  background: PropTypes.string,
  color: PropTypes.string
};

SharedNavbar.defaultProps = {
  title: "Punk Engineer",
  menu: menulist,
  background: "#000",
  color: "#fff"
};

export default SharedNavbar;
