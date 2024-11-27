import React from "react";
import SpecialitiesBanner from "../components/SpecialitiesBanner";
import LungImg from "../assets/BannerImg/lungImg.png";
import BookAppointment from "../components/BookAppointment";
import CoreValueItem from "../components/CoreValueItem";
import EditIcon from "@mui/icons-material/Edit";

const AmbulanceService = () => {
  return (
    <div>
      <SpecialitiesBanner
        title="(Call 01140554055)"
        text="Ambulance Services"
        img={LungImg}
      />
      <BookAppointment />
      <div className="pulmo-container">
        <div className="pulmo-inner-container">
          <h3>Ambulance Service in Muzaffarnagar</h3>
          <p className="top-para">
            <strong>Ambulance Services in Muzaffarnagar: </strong>At Evan
            Healthcare, we stand as industry leaders in emergency medical
            services, providing swift and reliable ambulance solutions. A simple
            call to 011 4055 4055 connects you to our dedicated Emergency
            Services, ensuring a well-equipped ambulance with trained emergency
            staff is dispatched to your location within 30 minutes* (only for
            house calls). With a record of catering to over 2,50,000 adult and
            paediatric patients annually across our emergency departments, we
            adhere to international protocols for acute care management,
            especially in cases of heart attack (MI), stroke, abdominal
            emergencies, and polytrauma. Our commitment to excellence is
            reflected in our qualified teams, cutting-edge technology, and
            specialised ambulances tailored to diverse needs. We take pride in
            being the top ambulance provider in Delhi, ensuring unparalleled
            care in critical situations.
          </p>

          <h2 className="second-heading">Equipment in the Ambulances</h2>
          <p className="top-para">
            At Max Healthcare, we understand that the quality of medical care
            during transportation is crucial in emergency situations. Our
            ambulances are equipped with a comprehensive array of cutting-edge
            medical equipment to address diverse healthcare needs.
          </p>

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Cardiac Monitors and Defibrillators"
            valuecontent="Our ambulances are outfitted with state-of-the-art cardiac monitors and defibrillators, ensuring real-time monitoring of vital signs and immediate response to cardiac emergencies."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Ventilators and Airway Management Equipment"
            valuecontent="For patients requiring respiratory support, our ambulances are equipped with advanced ventilators and airway management equipment to ensure optimal oxygenation during transit. In cases of intubated and ventilated patients, our ambulances are equipped with specialised transport ventilators, providing continuous respiratory support during the journey."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Infusion Pumps and Medication Administration Tools"
            valuecontent="To facilitate seamless administration of medications and intravenous fluids, our ambulances are equipped with infusion pumps and other essential tools for medication delivery."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Spine Boards and Immobilisation Devices"
            valuecontent="For patients with suspected spinal injuries or trauma, our ambulances are equipped with spine boards and immobilisation devices to ensure safe and secure transport."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Portable Life-Saving Equipment"
            valuecontent="Our commitment to patient safety extends to the inclusion of portable life-saving equipment such as balloon pumps, pacemakers, and monitors, ensuring that critical interventions can be initiated during transit."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Oxygen Cylinders"
            valuecontent="Every ambulance in our fleet is equipped with oxygen cylinders to provide immediate respiratory support to patients experiencing breathing difficulties."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Specialised Equipment for Air Ambulance Services"
            valuecontent="In our Air Ambulance services, we go a step further by arranging specialised equipment tailored for air transport. This includes equipment that meets the unique challenges of medical care at high altitudes and in-flight scenarios."
          />

          <CoreValueItem
            valueicon={<EditIcon style={{ fontSize: 35, color: "#f9a61a" }} />}
            valuetitle="Continuous Monitoring and Maintenance"
            valuecontent="Our equipment undergoes regular monitoring and maintenance to ensure optimal functionality. Our commitment to patient care extends to the reliability and effectiveness of every piece of equipment in our ambulances."
          />
        </div>
      </div>
    </div>
  );
};

export default AmbulanceService;
