import React from 'react';
import prodImg1 from "../../../Assets/Product/Single-prod-2.png";
import prodImg2 from "../../../Assets/Product/Single-prod-2.png";
import './Description.css';

export default function Description() {
  return (
    <div>
      <div className="prod-info-container container-fluid">
          <div className="prod-info">
            <div className="prod-info-headings">
              <span className='active-heading'>Description</span>
              <span>Additional Info</span>
              <span>Reviews[5]</span>
            </div>
            <div className="prod-info-desc">
              <p>
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
          <div className="prod-images">
            <div>
              <img className="img-fluid" src={prodImg1} alt="product" />
            </div>
            <div>
              <img className="img-fluid" src={prodImg2} alt="product" />
            </div>
          </div>
        </div>

        <hr />
    </div>
  )
}
