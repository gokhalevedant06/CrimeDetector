import cv2 as cv
from cv2 import rectangle
import numpy as np

def predict(filepath,filename):
    net =cv.dnn.readNet('yolov4-tiny-custom_4000.weights','yolov4-tiny-custom.cfg')

    classlabels=[]
    with open('obj.names','r') as f:
        classlabels =f.read().splitlines()

    img=cv.imread(filepath)
    height,width,_=img.shape

    blob=cv.dnn.blobFromImage(img,1/255,(416,416),(0,0,0),swapRB=True,crop=False)
    net.setInput(blob)

    outputlayers=net.getUnconnectedOutLayersNames()
    layerOutputs=net.forward(outputlayers)

    rectannotation=[]
    confidences=[]
    class_ids=[]

    for output in layerOutputs:
        for detection in output:
            scores=detection[5:]
            class_id=np.argmax(scores)
            confidence=scores[class_id]
            if confidence>0.3:
                centerx=int(detection[0]*width)
                centery=int(detection[1]*height)
                w=int(detection[2]*width)
                h=int(detection[3]*height)
                x=int(centerx-w/2)
                y=int(centery-h/2)
                rectannotation.append([x,y,w,h])
                confidences.append((float(confidence)))
                class_ids.append(class_id)

    indexes=cv.dnn.NMSBoxes(rectannotation,confidences,0.5,0.4)
    colors=np.random.uniform(0,255,size=(len(rectannotation),3))
    for i in indexes.flatten():
        x,y,w,h=rectannotation[i]
        label=str(classlabels[class_ids[i]])
        confidence=str(round(confidences[i],2))
        color=colors[i]
        cv.rectangle(img,(x,y),(x+w,y+h),color,3)
        cv.putText(img,label+" "+confidence,(x,y+20),cv.FONT_HERSHEY_PLAIN,2,(255,255,255),5)

    # cv.imshow('Image',img)
    cv.imwrite('./static/'+filename, img)
    # cv.waitKey(0)
    # cv.destroyAllWindows()
