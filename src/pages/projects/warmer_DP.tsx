import './warmer_DP.css'
import {useLocation, withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { rgbToHex, withStyles } from '@material-ui/core/styles';
// import MuiAccordion from '@material-ui/core/Accordion';
// import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
// import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';

export const Warmer_DP = withRouter((props) =>{

    const logos='./images/dtmxmsf-logo.png';
    const newbornBubble='./images/newborn-bubbleWrap.png';
    const gloveWarming='./images/hotwater-glove.png';
    const incubator='./images/incubator.png';
    const kmc='./images/kmc.png';
    const thermometer='./images/thermometer.png';
    const transportWarming='./images/transport-warming.png';
    const goyalmaraMomBaby='./images/goyalmara-mom_baby.jpeg';
    const otter = './images/otter.png';
    const designPhases='./images/design-phases.png';
    const CandE = './images/cause_and_effect.png';
    const goyalmara = './images/goyalmara.png';
    const workshop = './images/workshop-zoom.png';
    const survey = './images/msf-survey.png';
    const productReqs='./images/reqsImg.png';
    const designPrinciples='./images/design-principles.png';
    const arrow='./images/arrow.png';
    const FM1='./images/FM-brokencord.png';
    const FM2='./images/FM-cleaning.png';
    const FM3='./images/FM-temp.png';
    const FM4='./images/FM-consumables.png';
    const FM5='./images/FM-devicestate.png';
    const productDev='./images/product-dev.png';

    const openImg = (image: string) => {
        window.open(`./images/${image}`);
    }
    
    const pdfDownload = (pdf: string) => {
        window.open(`${pdf}`);
    }

return (
    <div className="warmer_DP-div" id="warmer_dp">
        <div className="warmer-header-block-div">
            <div>
                <h2 className="DTMproject-title-sm">Design that Matters</h2> 
                <h2 className="DTMproject-title">Designing Solutions for Neonatal Hypothemia</h2>
            </div>
        </div>
        <div className="general-format">
            <div className="DTM-intro-div">
                <div className="DTM-intro-content">
                    <h3 className="subheader">Background</h3>
                        <p className="DTM-intro-text"><b>I work at Design that Matters (DtM), a non-profit that specializes in applying human-centered design methodologies to design products and systems for low-resource settings.</b> We are a tiny company. It is really just me and the founder working our hardest to make an impact in this world. We collaborate with people from all over the world to try and save newborn lives. Despite the past 18-months of being stuck behind our desks and in our homes, we have managed to make significant progress in the development of a conductive newborn warmer.</p>
                    </div>
                <div className="DTM-intro-img-div">
                    <img className="DTM-intro-img" src={logos}></img>
                </div>
            </div>
            <div className="need-div">
                <h3 className="subheader2">Neonatal Hypothermia</h3>
                    <div className="need-div-intro">
                        <div className="DTM-need-text">
                            <p><b>Every year an estimated 1.8 million lives could be saved just by keeping a newborn warm and clean.</b> Kangaroo Mother Care (KMC) is the standard of care for preventing and treating neonatal hypothermia in resource poor settings. But it is is not enough. <b>Even a 30-minute break in warming can result in the onset of neonatal hypothermia.</b> Cultural resistance, birth complications, and simply not having the space and resources for KMC results in a need for supplemental warming devices. </p>
                        </div>
                        <div className="NH-need-img-div">
                            <div>
                                <img className="NH-need-img" src={goyalmaraMomBaby}></img>
                                <img className="NH-need-img" src={kmc}></img>
                            </div>
                            <p className="NH-img_description">Shots from DtM field visit to MSF Goyalmara Hospital in Cox's Bazar, Bangladesh</p>
                        </div>
                        
                `   </div>
                {/* <div className="DTM-need-statement">
                    <p className="DTM-need-text2"><b>MSF project sites</b>, and other low-resource setting hospitals, <b>that provide 24-hour care to newborn patients </b></p>
                    <p className="DTM-need-text3"> <b>NEED</b></p>
                    <p className="DTM-need-text2"><b>A durable, easy-to-clean and hand-portable single-infant warmer that is hard to use wrong, requires limited maintenance, has no consumables, and costs significantly less than a radiant warmer.</b></p>  
                </div> */}
            </div>
            <div className="DtM-prior-div">
                <h3 className="subheader2">DtM’s Previous Progress</h3>
                <div className="otter-prototype">
                    <img className="otter-img" src={otter}></img>
                        <div className="protoype-img-right">
                            <p className="otter-text">Design that Matters initially responded to neonatal hypothermia when users of DtM’s Firefly Phototherapy Device expressed concern over warming during phototherapy treatment. DtM conducted a design sprint to build a warmer that complemented DtM’s Firefly Phototherapy Device about three years ago. However, the product has yet to successfully reach the market.  </p>
                            <img className="design-phases-img" src={designPhases}></img>
                        </div>
                </div>  
            </div>
            <div>
                <h3 className="subheader2-1">So we have a prototype… now what?</h3>
                
                <p className="DTM-need-text">This year has been centered around re-designing the strategy for bringing a conductive warmer to the market. We decided to go back to the basics and reassess warming needs, this time with project feasibility as one of the guiding factors. It is not enough to make a great product, there has to be someone to purchase and implement it. <b>We decided to focus our efforts on responding directly to needs expressed by an aid organization, specifically Médecins Sans Frontières (MSF), who can help us distribute and implement a conductive warmer. Throughout this project, I have taken on a variety of initiatives such as needs identification, research, market positioning, and partnership management. </b> </p>
          </div>
            <hr className="hr-divider-pages"></hr>

            <div className="DTM-MSF-div">
                <div className="CandE-div">
                    <h3 className="subheader">Partnering with Médecins Sans Frontières (MSF)</h3>
                    <h4 className="subheader2-1">Why partner with MSF?</h4>
                    <ul className="why-msf">
                        <li>Problem: Individual hospitals in LRS rarely purchase medical devices themselves.</li>
                        <li>Aid organizations (like MSF) are largely responsible for implementing medical devices into these markets.</li>
                        <li>By developing and designing our warming with MSF’s needs in mind, and with their help/input along the way (seen via the red path in the diagram below), we hope to foster a relationship and develop a product that will lead MSF to confidently support, purchase, and implement our product into their project sites throughout the world. </li>
                    </ul>
                    <div className="CandE-diagram-div">
                        <h3 className="CandE-title">Product Development Cause and Effect Diagram</h3>
                        <img className="CandE-img" onClick={()=> openImg('cause_and_effect.png')} src={CandE}></img>
                        <p className="img_description2">The red path represents collaboration with MSF. The blue path represents DtM internal project phases which will require collaboration with additional partners. </p>
                    </div>
                    <div className="stakeholders">
                        <h3 className="subheader2-1">Building a Team</h3>
                        <p className="DTM-need-text">We wanted to collaborate with a range of stakeholders who could provide input into the various stages, from addition to MSF’s product catalog to in-hospital use, of medical devices procurement in MSF contexts. <b>We built a team of stakeholders from MSF Japan Innovation Unit (JIU) and MSF Operational Centre Barcelona (OCBA) who represent MSF’s logistic personnel, biomedical technicians, product procurement team, and in-field clinicians. </b> In any other year we would have travelled to Spain and hosted workshops in-person; however, due to Covid-19, we had to work remote. We pulled together a team of people located in Japan, Spain, Democratic Republic of Congo, Kenya, Yemen, India, Senegal, Vietnam, and Uzbekistan.  </p>
                        <p className="DTM-need-text">Our goals were to:</p>
                        <ul className="why-msf">
                            <li>Identify warming gaps in MSF project sites</li>
                            <li>Understand MSF’s product selection process for addition to their product catalog</li>
                            <li>Identify current warming solutions and the barriers to their successful implementation</li>
                            <li>Define qualitative product requirements for a context-appropriate newborn warmer</li>
                        </ul>
                    </div>
                </div>

                <div className="needs-identification">
                    <h3 className="subheader2">Needs Identification</h3>
                    <p className="DTM-need-text">In February 2020, my co-worker was lucky enough to make it to Bangladesh to conduct a field visit at Goyalmara Hospital. A field visit to an MSF project site in Sub-Saharan Africa is in the planning phases but Covid-19 has made international travel very difficult. The remainder of the needs identification process was performed virtually. </p>
                    <p className="DTM-need-text"><b>I co-facilitated four workshops with our stakeholders as well as conducted several one-on-one and small group interviews. </b></p>
                    <div className="work-circles">
                        <div className="repair-circle">
                            <img className="circle1" src={goyalmara}></img>
                            <div className="DTMcircle1-area"> 
                                <h4 className="DTMcircle1-text">Field Visit</h4>
                            </div>
                            <div className="work-text-bullets">
                                <p>Goyalmara, Hospital in February 2020</p>
                                <p>Observed and interviewed clinicians and logistic personnel</p>
                                <p>Identified warming gaps and the barriers to uptake of current warming solutions</p>
                            </div>
                        </div>
                        <div className="repair-circle">
                            <img className="circle1" src={workshop}></img>
                            <div className="DTMcircle1-area"> 
                                <h4 className="DTMcircle2-text">Workshops & Interviews</h4>
                            </div>
                            <div className="work-text-bullets">
                                <p>Identified warming gaps within MSF project sites</p>
                                <p>Defined qualitative product requirements</p>
                                <p>Reviewed MSF product procurement process</p>
                            </div>
                        </div>
                        <div className="repair-circle">
                            <img className="circle1" src={survey}></img>
                            <div className="DTMcircle1-area"> 
                                <h4 className="DTMcircle1-text">Surveys</h4>
                            </div>
                            <div className="work-text-bullets">
                                <p>Individual responses and feedback on technical product requirements and specifications</p>
                                <p>Stakeholders were asked to define requirements as "Must Have", "Nice to Have", "Not Important" and "Unknown"</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="DTM-need-statement">
                    <p className="DTM-need-text2"><b>MSF project sites</b>, and other low-resource setting hospitals, <b>that provide 24-hour care to newborn patients </b></p>
                    <p className="DTM-need-text3"> <b>NEED</b></p>
                    <p className="DTM-need-text2"><b>A durable, easy-to-clean and hand-portable single-infant warmer that is hard to use wrong, requires limited maintenance, has no consumables, and costs significantly less than a radiant warmer.</b></p>  
                </div>
                
                <div className="product-reqs-div">
                    <h3 className="subheader2">Product Requirements</h3>
                    <div className="reqs-img-div">
                        <img className="req-img" onClick={()=> openImg('design-principles.png')} src={designPrinciples}></img>
                        <img className="arrow-img" src={arrow}></img>
                        <img className="req-img" onClick={()=> pdfDownload('../../pdf/210621 Warmer Product Requirements and Specifications.pdf')} src={productReqs}></img>
                    </div>
                    <p className="DTM-need-text">We defined qualitative design principles with our stakeholders. <b>I led the process of translating these principles into technical product requirements and specifications. I used methods inspired by Ulrich and Eppinger’s “Product Design and Development.”</b> The complete list of product requirements, with associated international standards and consumer standards can be found in my research section. </p>
                </div>

                

                <div className="market-survey-div">
                    <h3 className="subheader2">Market Survey: Does the product MSF needs already exist?</h3>
                    <p className="DTM-need-text">In an ideal world, the product MSF needs is already on the market and we could transition towards developing implementation plans. <b>I conducted extensive market research to analyze newborn warmers that are currently sold by European, US, and Asian manufacturers. </b>I compared each of these products to the requirements and specifications as defined by our MSF stakeholders.</p>
                    <p className="DTM-need-text">I eliminated products based on 5 key modes of failure.</p>
                    <div className="FM-overall-div">
                    <h3 className="CandE-title">Failure Modes for Warming Devices in MSF/LRS Contexts</h3>
                    <div className="failure-modes-div">
                        <div className="failure-mode">
                            <img className="failure-img" src={FM1}></img>
                            <p className="failure-text">Fragile cable between heating source and control unit are prone to damage.</p>
                        </div>
                        <div className="failure-mode">
                            <img className="failure-img" src={FM2}></img>
                            <p className="failure-text">Difficult and/or extensive process to sterilize and clean product between patients. Is not compatible with common cleaning products. </p>
                        </div>
                        <div className="failure-mode">
                            <img className="failure-img" src={FM3}></img>
                            <p className="failure-text">Requires room temperature control (AC) for accurate and safe performance.</p>
                        </div>
                        <div className="failure-mode">
                            <img className="failure-img" src={FM4}></img>
                            <p className="failure-text">High consumable requirement cannot be maintained in all MSF project sites.</p>
                        </div>
                        <div className="failure-mode">
                            <img className="failure-img" src={FM5}></img>
                            <p className="failure-text">Device state (on, off, broken) is not obvious. Device can break or temperature becomes too high/low without user knowing. </p>
                        </div>
                    </div></div>
                    <p className="DTM-need-text"><b>I concluded that there are no products on the market that meet MSF’s needs.</b> Industry does not design for resource constrained environments. The lack of monetary incentive and understanding of the environment means that MSF cannot wait for industry to develop the product they want. </p>
                    <p className="DTM-need-text">A complete report of the market study can be found in my research section.</p>
                </div>

                <div className="next-steps-div">
                    <h3 className="subheader2">Next Steps</h3>
                    <p className="DTM-need-text">MSF does not have a history in product innovation and will not be directly involved in the product's development. While we work on the newborn warmer, they will continue to perform research on the prevelance of neonatal hypothermia throughout MSF project sites. In the future, we will collaborate with them to develop protocols and implementation plans once the product development process is complete. </p>

                </div>
                
                <hr className="hr-divider-pages"></hr>

                <div className="product-dev-div">
                    <h3 className="subheader">Product Development</h3>
                    <p className="DTM-need-text">We have been cultivating a collection of project partners to help us bring this product to a reality. While I cannot disclose our current progress in regards to these partnerships as they are still in development, I can tell you we are working towards a field visit and design sprint!</p>
                    <img className="product-dev-img" src={productDev}></img>
                    {/* <h3 className="subheader2">Coming Soon</h3> */}
                </div>


  
                {/* <div className="current-warming-div">
                    <h4 className="subheader2">Current Warming Solutions</h4>
                    <p className="DTM-need-text">Interviews with MSF staff, the field visit to Goyalmara Hospital in Bangladesh, and workshops with various MSF stakeholders have concluded that: </p>
                    <div className="DTM-need-img-div">
                            <div className="DTM-need-left">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={incubator}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Incubators</b> are expensive, fragile, and difficult to clean and maintain. Bed sharing in incubators is common due to high patient to equipment ratios, increasing the risk of infection spread amongst unstable newborns.  </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={thermometer}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Radiant warmers</b>  are dangerous without expensive, disposable skin temperature probes. They draw large amounts of current, making them incompatible with electrically insecure areas. </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={gloveWarming}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Hot water bottles and water-filled surgical gloves </b>are dangerous; a break in a glove can result in a scalded newborn. Unregulated temperatures can result in hypothermia or hyperthermia.</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="DTM-need-right">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={kmc}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text">Breaks in <b>Kangaroo Mother Care (KMC)</b> are hard to avoid; even a 30 minute break in warming can result in the onset of hypothermia. KMC uptake is difficult after complex births and in areas with cultural barriers. </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={transportWarming}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Blankets and hats </b>are not enough to prevent hypothermia during in-hospital transport. They can prevent heat loss but do not provide heat to already hypothermic newborns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div> */}
                
            </div>
        </div>
    </div>
)


})