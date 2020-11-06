import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, animateScroll as scroll } from "react-scroll";

class TabsTwo extends Component {
  render() {
    let tab1 = "Skillset",
      tab2 = "Experience",
      tab3 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Backend Development <span> - Java</span>
                          </a>
                          I've got a deep understanding of Java and backend
                          programming.
                        </li>
                        <li>
                          <a href="/service">
                            Frontend Development
                            <span> - JavaScript, TypeScript, React.js</span>
                          </a>
                          I've got a good understanding of JavaScript,
                          TypeScript and React.js
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <Link
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                          >
                            Intern Backend Developer<span> - Redmind</span>
                          </Link>
                          2020 - Current
                        </li>
                        <li>
                          <Link
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                          >
                            Intern Frontend Developer<span> - Redmind</span>
                          </Link>
                          2020 - Current
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Vocational Degree
                            <span> - Nackademin AB, Stockholm</span>
                          </a>{" "}
                          Current
                        </li>
                        <li>
                          <a href="/service">
                            Upper Secondary Diploma
                            <span> - Huddingegymnasiet, Stockholm</span>
                          </a>{" "}
                          2012
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
