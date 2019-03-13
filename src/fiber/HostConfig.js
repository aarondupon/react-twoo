import {forceUpdate,finalizeInitialChildren,checkIfNodeHasMethods,renderNodes,transferEvents,transferDisplayObjectPropsByName,applyMethodsToInstance,createElement,appendChild,createTextElement,updateZBuffer} from './ReactPIXIFiberManager'
import {getRender } from './../utils/mapRendererToStage'
    
const HostConfig = {
    appendInitialChild(parent, child) {
        console.log('appendInitialChild::',parent,child)
        appendChild(parent, child)

    },
    appendChild(parent, child) {
        console.log('appendChild')
        appendChild(parent, child);
        
        // forceUpdate(parent.stage)
    },
    setInitialProperties() {
        
    },
    removeChild(parent,child){
        if (parent && child  &&  typeof parent.removeChild  === "function") {
            

            function removeChildren(parent){
                parent.children.forEach((child,i)=>{
                    removeChildren(child)
                    parent.removeChild(child);
                    child.destroy({children:true, texture:true, baseTexture:true});
                })
                
            }
            removeChildren(child)
            parent.removeChild(child);
            child.destroy({children:true, texture:true, baseTexture:true});
            //console.log('removeChild:', parent,child)
        }
    },
    removeChildFromContainer(parent, child) {
        if (parent && child  &&  typeof parent.removeChild  === "function") {
           parent.removeChild(child);
        }    
        // console.log('removeChildFromContainer:', child)
    },
    createInstance: (
        type,
        newProps,
        rootContainerInstance,
        _currentHostContext,
        workInProgress
    ) => {

        const node = createElement(
            type,
            newProps,
            rootContainerInstance,
            _currentHostContext,
            rootContainerInstance
        );

        if (node) {
            transferDisplayObjectPropsByName(node, newProps, null);
            updateZBuffer(node)
            transferEvents(node, newProps);
            renderNodes(node.stage)
        }

        return node;
    },
    commitUpdate(
        node,
        updatePayload,
        type,
        oldProps,
        nextProps,
        internalInstanceHandle
    ) {

        if (type === 'graphics') {
            applyMethodsToInstance(node, type, nextProps)
        }
        
        transferDisplayObjectPropsByName(node, nextProps,oldProps);
        updateZBuffer(node)
        transferEvents(node, nextProps);
        // debugger
        renderNodes(node.stage)

    },
    commitTextUpdate(
        node,
        oldPayload,
        updatePayload
    ){
       node.text = updatePayload;
       renderNodes(node.stage);
    },
    appendChildToContainer(parent, node) {
        appendChild(parent, node)

    },
   
    createTextInstance(
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle
    ) {
        
        return createTextElement(text);
    },
    finalizeInitialChildren(node, type, props) {
        
        if( checkIfNodeHasMethods(type)){//if (type === 'graphics') {
            applyMethodsToInstance(node, type, props)
        }
        else{
            finalizeInitialChildren(node, type, props)
        }

        // BUGY SHIT !!!!
        if(props.onLoaded){
            const renderer =getRender(node.stage)
            props.onLoaded(node,renderer)
        }
        
        return false;
    },

    getPublicInstance(inst) {
        return inst;
    },

    prepareForCommit() {
        // noop
    },

    prepareUpdate(wordElement, type, oldProps, newProps) {
        return true;
    },

    resetAfterCommit(stage) {
        // renderNodess(stage)//stage.__render()
    },

    resetTextContent(wordElement) {
        // noop
    },

    getRootHostContext(rootInstance) {
        const renderer = getRender(rootInstance)
        return {renderer:renderer}
        
        // You can use this 'rootInstance' to pass data from the roots.
    },
    getChildHostContext: (parentHostContext, type, rootContainerInstance) => {
        return parentHostContext
    },

    shouldSetTextContent(type, props) {
        return false;
    },

    now: () => Date.now,

    supportsMutation: true
}

export default HostConfig;