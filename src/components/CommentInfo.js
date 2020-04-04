import React from 'react';
import './comment.css';

class CommentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addcom: 0,
            coId: '',
            coContent: '',
            Cocomment: [
                {
                    SEQ: 1,
                    id: 'blue',
                    content: '안녕하세요',
                    commentSEQ: 1
                }
            ]
        }
        this.handleCocommentIDChange = this.handleCocommentIDChange.bind(this);
        this.handleCocommentContentChange = this.handleCocommentContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addcontact = this.addcontact.bind(this);
    }

    handleCocommentIDChange(event) {
        this.setState({coId: event.target.value});
    }

    handleCocommentContentChange(event) {
        this.setState({coContent: event.target.value});
    }

    handleSubmit() {
        const { Cocomment } = this.state;
        if(this.state.coId){
            if(this.state.coContent){
                this.setState({
                    Cocomment:
                        Cocomment.concat({ 
                            SEQ: (Cocomment.length + 1),
                            id: this.state.coId,
                            content: this.state.coContent,
                            commentSEQ: this.props.SEQ
                        })
                });
            } else {
                console.log('내용 입력')
            }
        } else {
            console.log('ID 입력')
        }
    }

    addcontact() {
        if(this.state.addcom !== this.props.SEQ) {
            this.setState({ addcom: this.props.SEQ })
        } else {
            this.setState({ addcom: 0 })
        }
    }

    render() {
        var num = window.location.hash.substring(7, window.location.hash.length)-0;
        const { Cocomment } = this.state;
        if(this.props.bbsSEQ === num) {
            return(
                <div className = 'commentDiv'> 
                    <h4 className = 'commentId'>
                        ID : { this.props.id }
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick = { this.addcontact } seq = { this.props.SEQ }>답글</button>
                    </h4> 
                    <h5 className = 'commentInfo'>{ this.props.contact }</h5>
                    <div>
                        {
                            this.state.addcom === this.props.SEQ
                            ?
                            <div>
                                {
                                Cocomment.map((contact) => {
                                    if(this.state.addcom === contact.commentSEQ) {
                                        return(
                                            <CocommentInfo 
                                                id = { contact.id }
                                                contact = { contact.content }
                                                commentSEQ = { contact.commentSEQ }
                                                SEQ = { contact.SEQ }
                                                key={ contact.SEQ }
                                            />
                                        );
                                    } else {
                                        return null;
                                    }
                                })
                                }
                                <div className = 'CocoInput'>
                                    <input 
                                        type ="text" 
                                        className="id" 
                                        placeholder="아이디" 
                                        value = { this.state.Cocomment.id }  
                                        onChange = { this.handleCocommentIDChange } 
                                    />
                                    &nbsp;
                                    <input 
                                        type ="text" 
                                        className="cocontent" 
                                        placeholder="내용" 
                                        value = { this.state.Cocomment.content }  
                                        onChange = { this.handleCocommentContentChange } 
                                    />
                                    &nbsp;
                                    <button onClick = { this.handleSubmit }>등록</button>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

class CocommentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className = 'CocommentDiv'>
                <h4 className = 'CocommentId'>
                    -> ID : { this.props.id }
                </h4> 
                <h5 className = 'commentInfo'>{ this.props.contact }</h5>
                    
            </div>
        );
    }
}


export default CommentInfo;