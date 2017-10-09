const { hhh } = require('react-babylonjs-3d');
/** @jsx hhh */

const Camera = require('./camera');
const Sky = require('./sky');
const ScenarioGround = require('./scenario-ground');

const Scenario = ({ y, z }) => (
    <scene clearColor={[0, 0, 0]}>
        <hemisphericLight name="light1" target={[0, 1, 0]} intensity={0.5} />
        <Camera position={[0, y, z]} />
        <Sky size={1000} infiniteDistance={true} />
        <ScenarioGround />
    </scene>
);

module.exports = Scenario;