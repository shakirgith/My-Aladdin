// import React, { PureComponent } from 'react'

// export class HomeSearchEngine extends PureComponent {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default HomeSearchEngine

import React from 'react';
// class Foo extends React.Component {

//     state = { showing: true };

//     render() {
//         const { showing } = this.state;
//         return (
//             <div>
//                 <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
//                 { showing 
//                     ? <div>This is visible</div>
//                     : null
//                 }
//             </div>  
//         )
//     }
// }
// export default Foo;
class HideAndShowDivOnClick extends React.Component {

    state = {
        showDiv: true
    }

    render() {
        const { showDiv } = this.state
        return (
            <div>
                <button onClick={() => this.setState({ showDiv: !showDiv })}>
                    { showDiv ? 'hide' : 'show' } 
                </button>
                { showDiv && (
                    <div id="the">Peek a boo</div>
                )}
            </div>  
        )
    }
}
export default HideAndShowDivOnClick;