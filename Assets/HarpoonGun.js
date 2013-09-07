function shoot(){
	// buletSeed.rigidbody.velocity=(Vector3.right+Vector3.up*2)*20;
	ropeEnd=buletSeed.rigidbody;
	// buletSeed.rigidbody.velocity=(posTarget-transform.position).normalizednormalized*20;
	// if(ropeSeed)
	// Instantiate(BulletHeadSeed);
}

var buletSeed:GameObject;
var ropeSeed:GameObject;
var posTarget=Vector3.zero;
private var ropeEnd:Rigidbody;
var ropLength=20;
var ropeSapce=1.0;
var canStrech=true;
function Start () {
	shoot();
}

function FixedUpdate () {
	if(ropLength>10)buletSeed.rigidbody.velocity=Vector3.right*40;
	dvec=ropeEnd.transform.position-transform.position;
	if(dvec.magnitude>ropeSapce){
		ropLength--;
		joint=Instantiate(ropeSeed).GetComponent("HingeJoint");
		joint.transform.position=transform.position;
		joint.transform.LookAt(ropeEnd.transform);
		joint.connectedBody=ropeEnd;
		ropeEnd=joint.rigidbody;
		if(ropLength==0){
			ropeEnd.rigidbody.constraints=RigidbodyConstraints.FreezePosition;
		}
	}
}