import React from 'react';
import './view.css';
import Comment from './Comment';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          board: [
          {
            SEQ: null,
            subject: null,
            content: null,
            date: null
          }]
        };
    }

    componentDidMount() {
        this.setState({
            board: JSON.parse(localStorage.getItem('board'))
        })
    }

    render() {
        const {board} = this.state; 
        var num = window.location.hash.substring(7, window.location.hash.length)-1;

        if(board[num]) {
            return(
                <div className = "container">
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                                <th className = "header" colSpan="3">게시판 글 보기</th>
                            </tr>
                        </thead> 
                            <tbody>
                            <tr>
                                <td className = "title">글 제목</td>
                                <td colSpan="2">
                                    { board[num].subject }
                                </td>
                            </tr>
                            <tr>
                                <td>작성일자</td>
                                <td colSpan="2">
                                    { board[num].date }
                                </td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td className = "content" colSpan="2">
                                    { board[num].content }
                                </td>    
                            </tr>
                        </tbody>
                    </table>
                    댓글
                    <Comment />
                    <a href="/" className="btn btn-primary">목록</a>
                    &nbsp;       
                </div>
            );
        } else {
            return null;
        }
    }
}

export default View;