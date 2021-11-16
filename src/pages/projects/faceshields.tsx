import './faceshields.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { rgbToHex, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

export const Faceshields = withRouter((props) =>{

    const faceshieldShipping='./images/faceshieldShipping.png';
    const faceshieldPackaging='./images/faceshield-packaging.jpeg';
    const nioshLogo='./images/niosh-logo.png';
    const nioshBase='./images/niosh-base-design.png';
    const nioshPrototype='./images/niosh-prototype.png';
    const nioshProcess='./images/niosh-ProcessIMG.png';
    const nioshFinal='./images/niosh-final-designs.png';
    const gallupNM='./images/gallup-NM.jpg';
    const USmap='./images/USmap-IHS.png';
    const research='./images/research-icon.png';
    const phone='./images/phone-icon.png';
    const box='./images/shipping-icon.png';
    const faceshield='./images/faceshield-icon.png';
    

    const Accordion = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          borderTop: 'none',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion);
      
      const AccordionSummary = withStyles({
        root: {
          //   backgroundColor: 'rgb(182, 202, 223, 0.5)',
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
         //   borderTop: '3px solid rgba(7, 53, 102)',
        borderTop: '3px solid rgba(7, 53, 102)',
        marginBottom: -1,
        marginTop: -59,
        minHeight: 56,
        '&$expanded': {
          minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0px',
          },
        },
        expanded: {},
      })(MuiAccordionSummary);
    
      const AccordionDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(1),
        },
      }))(MuiAccordionDetails);

    return (
        <div className="faceshield-div" id="faceshield">
            <div className="header-block-div">
                <div>
                    <h2 className="project-title-sm">Design that Matters</h2> 
                    <h2 className="project-title"> Covid-19 Faceshields</h2>
                </div>
            </div>
            <div className="general-format">
                    <div className="intro-div">
                        <div>
                            <h3 className="subheader">Background</h3>
                            <p className="intro-text">When Covid-19 hit the United States in March 2020, the country faced extreme personal protective equipment (PPE) shortages. Design that Matters responded by rapidly designing and fabricating face shields for local hospitals. By partnering with local Seattle-based volunteers, Harborview Medical, and Global Tech Plastics <b>we were able to produce over 300,000 injection molded face shields for pubilc and private WA hospitals.</b></p>
                            <p className="intro-text">In the Fall of 2020, we started hearing of additional PPE shortages in major hospitals. <b>I had read about how hard the Native American population was being hit by Covid-19 and I wondered if there was anything we could do to help.</b> I quickly learned IHS hospitals are underfunded and they too were experiencing extreme PPE shortages.</p>
                        </div>
                        <div className="intro-img-div">
                            <img className="intro-img" src={gallupNM}></img>
                            <p className="FSimg_description">Navajo woman being treated for Covid-19 in Gallup, NM</p>
                        </div>
                    </div> 
                    <hr className="hr-divider-pages"></hr>
                <div className="needs-div">
                        <h3 className="subheader">Responding to PPE Shortages at IHS Hospitals</h3>
                        <p className="intro-text">I lead this entire project. I was responsible for identifying hospitals experiencing PPE shortages, conducting interviews, and ensuring all face shields were successfully delivered to small, rural IHS hospitals. </p>
                        <h4 className="subheader2">Needs Identification</h4>
                        <div className="needs-content-div">
                            <div className="need-circle-div">
                                <div className="need-circle">
                                    <div className="need-bullets">
                                        <img src={research}></img>
                                        <p className="need-textA"><b>Research:</b> Understand the operational structure and supply chains of IHS hospitals; Identify IHS hospitals and clinics throughout the West and Southwest</p>
                                    </div>
                                </div>
                                <div className="need-circle">
                                    <div className="need-bullets">
                                        <img src={phone}></img>
                                        <p className="need-textA"><b>Interview: </b>Cold call hospitals and clinics to interview physicians and nurses about their PPE needs</p>
                                    </div>
                                </div>
                                <div className="need-circle">
                                    <div className="need-bullets">
                                        <img src={box}></img>
                                        <p className="need-textA"> <b>Supply: </b> Connect to hospital and clinic supply centers; send packages of face shields</p>
                                    </div>
                                </div>
                                <div className="need-circle">
                                    <div className="need-bullets">
                                        <img src={faceshield}></img>
                                        <p className="need-textA"> <b>Follow-Up: </b> Re-connect with health care workers and supply chain management after receiving face shield parcels to assess need for additional supplies</p>
                                    </div>
                                </div>
                            </div>
                        <div>
                             <img className="needs-map" src={USmap}></img>
                            <p className="FSimg_description">IHS Hospitals that expressed face shield PPE shortages</p>
                        </div> 
                    </div>
                </div>
                
                <div className="IHSresults-div">
                    <h3 className="subheader2">Results</h3>
                        <p className="results-text"><b>I successfully identified 11 hospitals experiencing PPE shortages,</b> the majority were IHS hospitals in rural areas that operate outside of standard supply chains. I established distribution connections to deliver the face shields directly to each hospital's supply center. <b>In total, we packaged and delivered over 1,500 faceshields to these small rural hospitals.</b> </p>
                    <div className="results-img-div">
                        <img className="results-img" src={faceshieldShipping}></img>
                        <img className="results-img" src={faceshieldPackaging}></img>
                    </div>
                    <div>
                        <p className="FSimg_description">Packaging face sheilds to ship to Indian Health Service Hospitals.</p>        
                    </div>
                </div>
                <hr className="hr-divider-pages"></hr>
                <div className="NIOSH-heads-div">
                    <h2 className="subheader">Demonstrating Universal Fit</h2>
                    <p className="results-text">The face shields were designed to have as universal a fit as possible. NASA biometrics for head circumferences were used in the design process to achieve this design specification. The biometrics range from a 5% female head to a 95% male head. <b> We considered expanding to international markets and in order to demonstrate universal fit, I designed and rapidly prototyped life-sized heads.</b> These heads are currently used to create a visual for the universal fit capability of the Covid-19 face shield. </p>
                </div>
                
                <div className="process-div">
                    <h3 className="subheader2">Design Process</h3>
                    <div className="FSprocess-grid">
                        <div className="FSprocess-area">
                            <img className="FSprocess-img" src={nioshLogo}></img>
                            <div>    
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Materials & Resources</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <p>The National Institute for Occupational Safety and Health (NIOSH) released digital headforms that represent the 5 most common face shapes and sizes: small, medium, large, short/wide, and long/narrow. These digital headforms were released on the NIOSH website. </p>
                                    <p>I downloaded the digital headforms and decided to make adjustments before fabricating them. I wanted to demonstrate the range of head circumferences the face shields are designed to fit so I scaled the heads uniformly to give us a 5% female, a 50% female, a 50% male, and a 95% male. These 5 biometrics provide a good range to demonstrate the product’s capabilities.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                             </div>
                        </div>
                       
                        <div className="FSprocess-area">
                            <img className="FSprocess-img" src={nioshBase}></img>
                            <div>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">CAD Design</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <p>The original NIOSH heads came with elongated necks. The heads are a visual aid and instead of unnaturally long necks, I wanted to design a base that would be inconspicuous to not distract from the product being displayed. I used mannequins and statues as inspiration. After a few CAD iterations I settled on a design I was happy with. I used meshmixer to combine the head stl files to my base stil file. </p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        </div>
                        <div className="FSprocess-area">
                            <img className="FSprocess-img" src={nioshPrototype}></img> 
                            <div>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Prototyping</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <p>Before 3D printing the life sized heads I wanted to rapidly prototype the design. I used Fusion360 Slicer to generate dxf files for laser cutting and assembled a full head using cardboard. After some tinkering I 3D printed the heads. The heads are too large to fit on one printer bed so I used Luban to split the design into 3 components that could be fitted together after printing.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>

                        </div>
                    </div>
                    <div className="sketches-div">
                        <h4 className="subheader2">Process Images</h4>
                        <div className="process-sketches">
                            <img className="process-sketches-img" src={nioshProcess}></img>
                        </div>
                        <div className="sketches-descriptions"> 
                            <p className="img_description">(A) CAD generated carboard head; (B) Rapidly prototyping head by assembling carboard model; (C) Combining 3D printed parts to finalize life sized head</p>
                        </div>
                    </div>
                </div>

                <div className="final-design-div">
                    <h3 className="subheader2">Final Design</h3>
                    <img className="FS-final-design-img" src={nioshFinal}></img>
                    <div className="links-div">
                        <p>Bonus Information</p>
                        <dl>
                            <dt>
                                <a href="https://3dprint.nih.gov/discover/3dpx-013359"> NIH Website: Design that Matters Covid-19 Faceshield</a>
                            </dt>
                            <dt>
                                <a href="https://www.designthatmatters.org/covid-19">Design that Matters: Covid-19 Faceshield Design Sprint</a>
                            </dt>
                            <dt>
                                <a href="https://www.youtube.com/watch?v=q7tOjcmQu9M&ab_channel=DesignthatMatters">Youtube: How to Combine STL Files Using Meshmixer</a>
                            </dt>
                            <dt>
                                <a href=" https://www.instructables.com/Fabricating-Life-Sized-Heads/">Instructables: Fabricating Lifesized Heads</a>
                            </dt>
                        </dl>
                    </div>
                </div>

            </div>
            
            

        </div>
    )
    
});