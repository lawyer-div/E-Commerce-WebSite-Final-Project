import { useNavigate } from "react-router-dom";
import dining from "../../../Assets/diningRoom.png";
import bedroom from "../../../Assets/bedRoom.png";
import living from "../../../Assets/livingRoom.png";
import './Banner.css';

function Banner() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div>
      <div className="banner_img">
        <div className="browse_range">
          <span className="browse_range_name">browse the range</span>
          <span className="browse_range_sentence">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>

          <div className="browse_range_main_card">
            <div className="browse_range_card" onClick={() => handleCategoryClick('electronics')}>
              <img alt="dining" className="browse_range_card" src={dining} />
              <span className="browse_range_card_name"><br />dining</span>
            </div>
            <div className="browse_range_card" onClick={() => handleCategoryClick('jewelery')}>
              <img alt="living" className="browse_range_card" src={living} />
              <span className="browse_range_card_name"><br />living</span>
            </div>
            <div className="browse_range_card" onClick={() => handleCategoryClick("men's clothing")}>
              <img alt="bedroom" className="browse_range_card" src={bedroom} />
              <span className="browse_range_card_name"><br />bedroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
