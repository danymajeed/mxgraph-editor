export default {
  "Use Case": {
    type: "vertex",
    style:
      "shape=ellipse;fontStyle=2;textColor=black;fillColor=white;strokeColor=black",
  },
  Actor: {
    type: "vertex",
    style:
      "shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;fillColor=white;strokeColor=black",
  },
  Class: {
    type: "vertex",
    style:
      "strokeColor=black;swimlane;html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;swimlaneFillColor=#ffffff;fillColor=white;componentName=class;",
  },
  "Aggregate Arrow": {
    type: "edge",
    style:
      "strokeColor=black;endArrow=diamondThin;html=1;endSize=14;startArrow=none;endFill=0;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=bottom;",
  },
  "Generalization Arrow": {
    type: "edge",
    style: "strokeColor=black;endArrow=block;endSize=10;endFill=0;html=1;",
  },
  Decision: {
    type: "vertex",
    style: "shape=rhombus;fontStyle=2;textColor=black;fillColor=white;strokeColor=black",
  },
  "Activity Start": {
    type: "vertex",
    style: "shape=ellipse;fontStyle=2;whiteSpace=wrap;html=1;aspect=fixed;fontColor=white;fillColor=green;strokeColor=black"
  },
  "Activity End": {
    type: "vertex",
    style: "shape=doubleEllipse;fontStyle=2;whiteSpace=wrap;html=1;aspect=fixed;fontColor=white;fillColor=red;strokeColor=black"
  },
  "Activity Decision": {
    type: "vertex",
    style: "shape=rhombus;fontStyle=2;textColor=black;fillColor=white;strokeColor=black",
  },
  "Include Extend": {
    type: "edge",
    style: "edgeStyle=loopEdgeStyle;endSize=10;endArrow=open;dashed=1;html=1;",
  },
  Process: {
    type: "vertex",
    style: "rounded=1;whiteSpace=wrap;html=1;",
  },
  "Directional Connector": {
    type: "edge",
    style: "edgeStyle=loopEdgeStyle;endArrow=classic;html=1;",
  },
};
