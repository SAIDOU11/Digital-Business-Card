import img from './assets/MyPicProfile.jpg';

const Info = () => {
  return (
    <div className="info-container">
      <img
        style={{
          borderTopLeftRadius: '1em',
          borderTopRightRadius: '1em',
          height: '317px',
          width: '100%',
        }}
        src={img}
        alt=""
      />
      <h3 style={{ marginBottom: '0.5em', fontSize: '1.2rem' }}>
        Salif Saidou
      </h3>
      <p style={{ margin: '0.5em', color: '#F3BF99' }}>Frontend Developer</p>
      <p>salifsaidou.website</p>
      <div className="buttons">
        <div className="email">
          <button style={{ width: '115px' }}>
            <i class="fa-solid fa-envelope"></i> Email
          </button>
        </div>
        <div className="linkedin">
          <button
            style={{
              width: '115px',
              backgroundColor: '#5093E2',
              color: '#fff',
            }}
          >
            <i
              style={{
                backgroundColor: '#5093E2',
                color: '#fff',
              }}
              class="fa-brands fa-linkedin"
            ></i>{' '}
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
