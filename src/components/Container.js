import React from 'react';
import { Link } from 'react-router-dom';

import './container.css'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 2,
            board: [
                {
                    SEQ: 1,
                    subject: '안녕',
                    content: '안녕하세요',
                    date: '2020-3-27'
                },
                {
                    SEQ: 2,
                    subject: '하이',
                    content: 'ㅎㅇㅎㅇ',
                    date: '2020-3-27'
                }
            ]
        };
    }

    componentDidUpdate() {
        const { board } = this.state;

        if(window.sessionStorage.getItem("title")) {
            var date = new Date();
            this.setState({
                board:
                    board.concat({ 
                        SEQ: (board.length + 1),
                        subject: window.sessionStorage.getItem("title"),
                        content: window.sessionStorage.getItem("content"),
                        date: (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
                    })
            });
        }
        localStorage.setItem('board', JSON.stringify(board));
        window.sessionStorage.clear();
    }
    
    componentDidMount() {
        const { board } = this.state;

        if(JSON.parse(localStorage.getItem('board'))) {
            this.setState({
                board: JSON.parse(localStorage.getItem('board'))
            })
        } else {
            localStorage.setItem('board', JSON.stringify(board));
        }
        if(window.sessionStorage.getItem("title")) {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render () {
        const {board} = this.state; 
        return (
            <div className = 'container'>
                <table className = "table">
                    <thead>
                        <tr>
                            <th className = "thead-td">번호</th>
                            <th className = "thead-td">제목</th>
                            <th className = "thead-td">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                          board.map((contact, index) => {
                            return (
                              <ContainerInfo 
                                SEQ={contact.SEQ}
                                subject={contact.subject}
                                date={contact.date}
                                key={index}
                              />
                            );
                          }) 
                        }
                    </tbody>
                </table>
                <Link to = '/write' className = "btn btn-primary" >글쓰기</Link>
            </div>
        );
    }
}

class ContainerInfo extends React.Component {
    render() {
        return(
            <tr>
                <th>{this.props.SEQ}</th>
                <th><Link className = 'subject' to = {'/bbsID'+(String)(this.props.SEQ)}>{this.props.subject}</Link></th>
                <th>{ this.props.date }</th>
            </tr>
            );
    }
}

export default Container;
