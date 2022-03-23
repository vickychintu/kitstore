import logo from "./logo.svg";
import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="pagetitle">
        <h1>Admin DashBoard</h1>
      </div>
      <div className="midcontent">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="populate" title="Populate Machine">
            <div className="formContent">
              <div className="macId">
                <label htmlFor="machineName">MachineId:-</label>
                <input
                  type="text"
                  id="machineName"
                  placeholder="Eg:-BLR560027"
                />
              </div>
              <div className="macId">
                <label htmlFor="nthSku">Sku number:-</label>
                <select id="nthSku" name="nth Sku">
                  <option value="1">one</option>
                  <option value="2">two</option>
                  <option value="3">three</option>
                  <option value="4">four</option>
                  <option value="5">four</option>
                  <option value="6">four</option>
                </select>
              </div>
              <div className="macId">
                <label htmlFor="skuId">Sku Id:-</label>
                <input type="text" id="skuId" placeholder="BlazeChoc27" />
              </div>
              <div className="macId">
                <label htmlFor="skuName">Sku Name:-</label>
                <input type="text" id="skuId" placeholder="BlazeChoc27" />
              </div>
              <div className="macId">
                <label htmlFor="skuIcon">Sku Icon:-</label>
                <input
                  type="file"
                  id="skuIcon"
                  name="skuIcon"
                  accept="image/*"
                />
              </div>
              <div className="spacer"></div>
              <div className="macId">
                <p>Price</p>
              </div>
              <div className="macId">
                <label htmlFor="1Price">One Scoop:-</label>
                <input
                  type="text"
                  id="1Price"
                  placeholder="Price for 1 scoop"
                />
              </div>
              <div className="macId">
                <label htmlFor="2Price">Two Scoop:-</label>
                <input
                  type="text"
                  id="2Price"
                  placeholder="Price for 2 scoops"
                />
              </div>
              {/* Discounts */}
              <div className="spacer"></div>
              <div className="macId">
                <p>Discounts</p>
              </div>
              <div className="macId">
                <label htmlFor="1Discount">One Scoop:-</label>
                <input
                  type="text"
                  id="1Price"
                  placeholder="Price for 1 scoop"
                />
              </div>
              <div className="macId">
                <label htmlFor="2Discount">Two Scoop:-</label>
                <input
                  type="text"
                  id="2Price"
                  placeholder="Price for 2 scoops"
                />
              </div>
              <div className="macId">
                <button>DONE</button>
                <button>UPDATE</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="admin" title="Admin Settings">
            <h2>bye</h2>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <h3>go on</h3>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
