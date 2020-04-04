import React from 'react';
import { createBrowserHistory } from 'history';
import './write.css'

const browserHistory = createBrowserHistory();

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		bbsTitle: '',
		bbsContent: ''
	}
    this.handleBbsTitleChange = this.handleBbsTitleChange.bind(this);
    this.handleBbsContentChange = this.handleBbsContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleBbsTitleChange(event) {
	this.setState({bbsTitle: event.target.value});
}

handleBbsContentChange(event) {
	this.setState({ bbsContent: event.target.value });
}

handleSubmit() {
	if(this.state.bbsTitle){
		if(this.state.bbsContent){
			window.sessionStorage.setItem("title", this.state.bbsTitle);
			window.sessionStorage.setItem("content", this.state.bbsContent);
			browserHistory.push('/');
		} else {
			console.log('내용 입력')
			this.contentInput.focus();
		}
	} else {
		console.log('제목 입력')
		this.titleInput.focus();
	}
}

componentDidMount() {
	
}
  
  render () {
    return (
        <div className = "container">
		  <form onSubmit={this.handleSubmit}>
            <table className = "table">
                <thead>
	 				<tr>
	 					<th className = "table-from" colSpan = '2'>게시판 글쓰기 양식</th>
	 				</tr>
	 			</thead> 
	 			<tbody>
	 				<tr>
						 <td>
							 <input 
								 type="text" 
								 className = "form-width" 
								 placeholder="글 제목" 
								 value = {this.state.bbsTitle} 
								 onChange = {this.handleBbsTitleChange}
								 ref = { (ref) =>{ this.titleInput = ref } }
								 maxLength="50"
							/>
						</td>
	 				</tr>
	 				<tr>
	 					<td>
							 <textarea 
								 className = "form-height" 
								 placeholder="글 내용"  
								 value = {this.state.bbsContent} 
								 onChange = {this.handleBbsContentChange}
								 ref = { (ref) =>{ this.contentInput = ref } }
								 maxLength="2000"
							/>
						</td>
	 				</tr>
	 			</tbody>
            </table>
            <input type="submit" className="btn btn-primary" value="글쓰기" />
		  </form>
		</div>
    );
  }
}

export default Write;