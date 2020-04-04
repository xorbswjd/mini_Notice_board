import React from 'react';
import './comment.css';
import CommentInfo from './CommentInfo';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coId: '',
            coContent: '',
            comment: [
                {
                    SEQ: 1,
                    id: 'root',
                    content: 'ㅎㅇ',
                    bbsSEQ: 1
                },
                {
                    SEQ: 2,
                    id: 'blue',
                    content: '안녕',
                    bbsSEQ: 1
                }
            ]
        };

        this.handleCommentIDChange = this.handleCommentIDChange.bind(this);
        this.handleCommentContentChange = this.handleCommentContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCommentIDChange(event) {
        this.setState({coId: event.target.value});
    }

    handleCommentContentChange(event) {
        this.setState({coContent: event.target.value});
    }

    handleSubmit() {
        const { comment } = this.state;
        var num = window.location.hash.substring(7, window.location.hash.length)-0;
        if(this.state.coId){
            if(this.state.coContent){
                this.setState({
                    comment:
                        comment.concat({ 
                            SEQ: (comment.length + 1),
                            id: this.state.coId,
                            content: this.state.coContent,
                            bbsSEQ: num
                        })
                });
            } else {
                console.log('내용 입력')
            }
        } else {
            console.log('ID 입력')
        }
    }

    render() {
        const { comment } = this.state;
        return(
            <div className = "Cocontainer">
                {
                    comment
                    ?
                    <div>
                        {
                        comment.map((contact) => {
                            return(
                                <CommentInfo
                                    id = { contact.id }
                                    contact = { contact.content }
                                    bbsSEQ = { contact.bbsSEQ }
                                    SEQ = { contact.SEQ }
                                    key={ contact.SEQ }
                                />
                            );
                        })
                        }
                    </div>
                    :
                    null
                }
                <div className = 'coInput'>
                    댓글 입력 &nbsp;
                    <input
                        type ="text" 
                        className="id" 
                        placeholder="아이디" 
                        value = { this.state.comment.id }  
                        onChange = { this.handleCommentIDChange } 
                    />
                    &nbsp;
                    <input
                        type ="text" 
                        className="cocontent" 
                        placeholder="내용" 
                        value = { this.state.comment.content }  
                        onChange = { this.handleCommentContentChange } 
                    />
                    &nbsp;
                    <button onClick = { this.handleSubmit }>등록</button>
                </div>
            </div>
        );
    }
}

export default Comment;