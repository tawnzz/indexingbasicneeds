import React from "react";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";

import WhoWeAre from "images/who-we-are.png";
import Crisis from "images/crisis_icon.png";
import Food from "images/food_icon.png";
import Financial from "images/financial_icon.png";
import Housing from "images/house_icon.png";

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resources: [],
    };
  }

  async componentDidMount() {
    let { json, headers } = await API.ResourcesIndex();
    let resources = json;
    this.setState({ resources: resources });
  }

  render() {
    return (
      <div className="container is-widescreen page-container">
        <Navbar />
        {/* Landing Block */}
        <div class="home-page-landing block">
          <h1 class="white-text">Basic Needs Center</h1>
          <div class="home-page-row">
            <div class="home-page-landing-text">
              <p class="white-text">
                Founded in Spring 2019, the Basic Needs Center serves as a physical resource hub for basic
                needs resources. The Basic Needs Committee supports the food, housing, and economic justice of
                those in our campus community.
                    </p>

              <div class="btn-row">
                <button type="button" class="btn btn-primary">Our Resource Index</button>
                <button type="button" class="btn btn-primary">Frequently Asked Questions</button>

              </div>


            </div>
            <div class="home-page-left-img">
              BNS Logo here
                </div>
          </div>
        </div>

        {/* Background Block */}
        <div class="home-page-background block">
          <h1>Our Vision, Our Mission, Our Values</h1>
          <div class="home-page-background-text">
            <p>
              Basic Needs Security refers to the food, housing, and wellness security of our community. We
              understand that basic needs have a direct impact on the wellness, mental-emotional-physical health,
              academic performance, professional development, and holistic success of our students.

              UC Berkeley's Basic Needs Security Committee is fully dedicated to leading the transformation of UC
              Berkeley into a basic needs secure institution of higher education.
                </p>
            <button type="button" class="btn btn-primary">Meet the BNS Village</button>
          </div>

          <div class="home-page-left-img">
            Background Img Here
            </div>

        </div>

        {/* Resource Index Block */}
        <div class="home-page-resource-index block">
          <div class="home-page-resource-text">
            <h1>Our Resource Index</h1>
            <p>
              UC Berkeley's Basic Needs Security Committee is made up of
              undergraduate, graduate student, professional staff, faculty,
                    administrators, and community experts. </p>
            <p>Our areas of focus are:</p>
          </div>




          <div class="home-page-resource-cards">

            <div class="home-page-resource-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>

              <div class="card-container">
                <p class="card-text">Undergraduate Student</p>
              </div>
            </div>

            <div class="home-page-resource-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div class="card-container">
                <p class="card-text">Graduate / Professional Student</p>
              </div>
            </div>

            <div class="home-page-resource-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div class="card-container">
                <p class="card-text">Service Worker / Staff</p>
              </div>
            </div>



          </div>

          <button type="button" class="btn btn-primary" style="margin: 0 auto; margin-top: 50px;">Search all
                resources</button>

        </div>


        {/* BNS Center Block */}

        <div class="home-page-center block">
          <div class="home-page-center-text">
            <h1 class="white-text">Our Center</h1>
          </div>

          <div class="home-page-center-text">

            <p class="white-text">

              <b>Location: 12345 MLK Way, Berkeley, CA
                        <br>Open Hours: Monday - Friday, 9 AM - 9 PM</br></b> </p>
            <p class="white-text">
              The Basic Needs Center serves as a physical resource hub for basic needs resources. The Basic Needs
              Committee supports food, housing, and economic justice of those in our campus community.

              Feel free to walk in or book an appointment with the Basic Needs Case Manager, the Basic Needs
              Financial Aid Assitance, or with County Workers.

                </p>
            <button type="button" class="btn btn-primary">Book Appointment</button>
          </div>

          <div class="home-page-left-img">
            BNS Center Img Here
                {/* <img src="BNS-logo"> */}
          </div>

        </div>


        {/* Student Testimonies */}

        <div class="home-page-testimonies block">

          <div class="home-page-testimonies-text">
            <h1>Student Testimonies</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dsint occaecat cupidatat non proident
    </p>
          </div>

          <div class="home-page-testimony-cards">

            <div class="home-page-testimony-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>

              <div class="card-test-container">
                <p class="card-test-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inct laborum. - Jemma Kaye, undergrad, 2020</p>
              </div>
            </div>

            <div class="home-page-testimony-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div class="card-test-container">
                <p class="card-test-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inct laborum. - Jemma Kaye, undergrad, 2020</p>
              </div>
            </div>

            <div class="home-page-testimony-card">
              <div class="card-img" style="height: 200px; width:100%">
                {/* <img src="rock600x400.jpg" alt="Undergraduate" style="width:100%;"> */}
              </div>
              <div class="card-test-container">
                <p class="card-test-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inct laborum. - Jemma Kaye, undergrad, 2020</p>
              </div>
            </div>



          </div>

          <button type="button" class="btn btn-primary" style="margin: 0 auto; margin-top: 50px;">Read our stories</button>

        </div>

        {/* Donate */}
        <div class="home-page-donate block">
            <h1>Donate to Basic Needs Security</h1>
            <div class="home-page-right">
                <div class="home-page-donate-text" style="border-bottom: 1px #C4C4C4 solid;
                margin-bottom: 30px;">
                    <p>
                        Your contribution will go to help transform UC Berkeley into a basic needs secure institution.


                    </p>
                    <button type="button" class="btn btn-primary" style="margin-top: 8px; margin-bottom: 45px;">Donate
                        Online</button>
                </div>

                <div class="home-page-donate-label">
                    Donate By Mail
                </div>

                <div class="home-page-donate-info">

                    <div class="row">
                        <div class="donate-by-mail left">
                            <div class="info">Check to:</div>

                        </div>
                        <div class="donate-by-mail right">
                            <div class="info">UC Berkeley Foundation</div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="donate-by-mail left">
                            <div class="info">Memo:</div>

                        </div>
                        <div class="donate-by-mail right">
                            <div class="info">Basic Needs</div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="donate-by-mail left">
                            <div class="info">Address:</div>

                        </div>
                        <div class="donate-by-mail right">
                            <div class="info">
                                University of California, Berkeley, Gift Services
                                <br>1995 University Ave,
                                Ste 40, Berkeley, CA 94704-1070 </br></div>
                        </div>


                    </div>



                </div>
            </div>

            <div class="home-page-left">
                BNS Donate Image
                {/* <img src="BNS-logo"> */}
            </div>

        </div>



        {/* End of Container */}
      </div>


    );
  }
}

export default HomePage;

