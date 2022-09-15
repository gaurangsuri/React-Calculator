import React from 'react';
class calc extends React.Component{
    constructor(){
        super();
        this.state={n1:0,n2:0,opstate:false,op:'',opcount:0,cfl:1,fl:false,result:0,eqcount:0}
    }
    clear=()=>{
        document.getElementById("storage").style.display="none";
        this.setState({n1:0,n2:0,opstate:false,op:'',opcount:0,cfl:1,fl:false,result:0,eqcount:0});
    }
    absolute=()=>{
        document.getElementById("storage").style.display="block";
        if(this.state.result!==0){
            this.setState({result:this.state.result-(this.state.result*2)});
        }else if(this.state.result===0){
            this.setState({result:-0});
        }else if(this.state.result===-0){
            this.setState({result:0});
        }
    }
    perc=()=>{
        document.getElementById("storage").style.display="block";
        this.setState({result:(this.state.result/100)});
        if((this.state.result/100)%1!==0){
            this.setState({fl:true});
        }
    }
    updateres=(event)=>{
        document.getElementById("storage").style.display="block";
        if(this.state.result===0 && this.state.fl!==true){
            this.setState({result:this.state.result+parseInt(event.target.value)});
        }else if(this.state.result>0 && this.state.fl!==true){
            this.setState({result:(this.state.result)*10 + parseInt(event.target.value)});
        }else if(this.state.result<0 && this.state.fl!==true){
            this.setState({result:(this.state.result)*10 - parseInt(event.target.value)});
        }else if(this.state.fl===true){
            this.setState({result:this.state.result+event.target.value});
        }
    }
    flcheck=(event)=>{
        document.getElementById("storage").style.display="block";
        this.setState({fl:true,cfl:this.state.cfl+1});
        if(this.state.cfl===1){
            this.setState({result:this.state.result + event.target.value });
        }else{}
    }
    setop=(event)=>{
        document.getElementById("storage").style.display="block";
        this.setState({op:event.target.value,opstate:true,opcount:this.state.opcount+1});
        if(this.state.opcount===0){
            if(this.state.fl!==true){
            this.setState({n1:parseInt(this.state.result)});
            }else{
                this.setState({n1:parseFloat(this.state.result)});
            }
            this.setState({cfl:1,fl:false,result:0});
        }else if(this.state.opcount!==0 && this.state.eqcount!==0){
            this.setState({n1:this.state.result,n2:0,result:0,eqcount:0});
        }else if(this.state.opcount!==0 && this.state.eqcount===0){
            this.setState({result:0});
            if(this.state.op==='/' && this.state.fl===true){
                this.setState({n1:(this.state.n1)/parseFloat(this.state.result)});
            }else if(this.state.op==='/' && this.state.fl!==true){
                this.setState({n1:(this.state.n1)/parseInt(this.state.result)});
            }
            else if(this.state.op==='*' && this.state.fl===true){
                this.setState({n1:(this.state.n1)*parseFloat(this.state.result)});
            }else if(this.state.op==='*' && this.state.fl!==true){
                this.setState({n1:(this.state.n1)*parseInt(this.state.result)});
            }
            else if(this.state.op==='-' && this.state.fl===true){
                this.setState({n1:(this.state.n1)-parseFloat(this.state.result)});
            }else if(this.state.op==='-' && this.state.fl!==true){
                this.setState({n1:(this.state.n1)-parseInt(this.state.result)});
            }
            else if(this.state.op==='+' && this.state.fl===true){
                this.setState({n1:(this.state.n1)+parseFloat(this.state.result)});
            }else if(this.state.op==='+' && this.state.fl!==true){
                this.setState({n1:(this.state.n1)+parseInt(this.state.result)});
            }
        }
    }
    equals=()=>{
        document.getElementById("storage").style.display="none";
        if(this.state.eqcount===0){
            this.setState({eqcount:this.state.eqcount+1});
            if(this.state.fl!==true){
                this.setState({n2:parseInt(this.state.result)});
            }else if(this.state.fl===true){
                this.setState({n2:parseFloat(this.state.result)});
            }
        }else{
            this.setState({n1:this.state.result});
            this.setState({eqcount:this.state.eqcount+1});
        }
        if(this.state.op==='/' && this.state.eqcount===0 && this.state.fl===true){
            this.setState({result:(this.state.n1)/parseFloat(this.state.result)});
        }else if(this.state.op==='/' && this.state.eqcount===0 && this.state.fl!==true){
            this.setState({result:(this.state.n1)/parseInt(this.state.result)});
        }
        else if(this.state.op==='*' && this.state.eqcount===0 && this.state.fl===true){
            this.setState({result:(this.state.n1)*parseFloat(this.state.result)});
        }else if(this.state.op==='*' && this.state.eqcount===0 && this.state.fl!==true){
            this.setState({result:(this.state.n1)*parseInt(this.state.result)});
        }
        else if(this.state.op==='-' && this.state.eqcount===0 && this.state.fl===true){
            this.setState({result:(this.state.n1)-parseFloat(this.state.result)});
        }else if(this.state.op==='-' && this.state.eqcount===0 && this.state.fl!==true){
            this.setState({result:(this.state.n1)-parseInt(this.state.result)});
        }
        else if(this.state.op==='+' && this.state.eqcount===0 && this.state.fl===true){
            this.setState({result:(this.state.n1)+parseFloat(this.state.result)});
        }else if(this.state.op==='+' && this.state.eqcount===0 && this.state.fl!==true){
            this.setState({result:(this.state.n1)+parseInt(this.state.result)});
        }
        else if(this.state.op==='/' && this.state.eqcount>0){
            this.setState({result:(this.state.result)/(this.state.n2)});
        }
        else if(this.state.op==='*' && this.state.eqcount>0){
            this.setState({result:(this.state.result)*(this.state.n2)});
        }
        else if(this.state.op==='-' && this.state.eqcount>0){
            this.setState({result:(this.state.result)-(this.state.n2)});
        }
        else if(this.state.op==='+' && this.state.eqcount>0){
            this.setState({result:(this.state.result)+(this.state.n2)});
        }
    }
    render(){
        console.log(this.state);
        return<React.Fragment>
            <div id='main'>
                <div id='resarr'>
                    <div id='storage'>
                        {this.state.n1}
                    </div>
                    {this.state.result}
                </div>
                <div>
                    <button onClick={this.clear} className='funcbut'><b>AC</b></button>
                    <button onClick={this.absolute} className='funcbut'>+/-</button>
                    <button onClick={this.perc} className='funcbut'>%</button>
                    <button onClick={this.setop} className='opbut' value={'/'}>/</button>
                </div>
                <div>
                    <button onClick={this.updateres} className='numbut' value={7}>7</button>
                    <button onClick={this.updateres} className='numbut' value={8}>8</button>
                    <button onClick={this.updateres} className='numbut' value={9}>9</button>
                    <button onClick={this.setop} className='opbut' value={'*'}>x</button>
                </div>
                <div>
                    <button onClick={this.updateres} className='numbut' value={4}>4</button>
                    <button onClick={this.updateres} className='numbut' value={5}>5</button>
                    <button onClick={this.updateres} className='numbut' value={6}>6</button>
                    <button onClick={this.setop} className='opbut' value={'-'}>-</button>
                </div>
                <div>
                    <button onClick={this.updateres} className='numbut' value={1}>1</button>
                    <button onClick={this.updateres} className='numbut' value={2}>2</button>
                    <button onClick={this.updateres} className='numbut' value={3}>3</button>
                    <button onClick={this.setop} className='opbut' value={'+'}>+</button>
                </div>
                <div>
                    <button onClick={this.updateres} id='but0' value={0}>0</button>
                    <button onClick={this.flcheck} className='numbut' value={'.'}>.</button>
                    <button onClick={this.equals} id='equals' className='opbut'>=</button>
                </div>
            </div>
        </React.Fragment>
    }
}
export default calc;