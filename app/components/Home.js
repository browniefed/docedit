import React, { Component } from 'react';
import { SelectableGroup } from 'react-selectable';


export default class Home extends Component {
  constructor (props) {
		super(props);
		this.state = {
      boxes: []
		}

		this.handleSelection = this.handleSelection.bind(this);
	}

	handleSelection (box) {
    let boxes = [
      ...this.state.boxes,
      box
    ]

    this.setState({ boxes })

	}


	render () {
		return (
			<div>
				<SelectableGroup
					className="main"
					style={{position: 'relative'}}
					ref="selectable"
					onSelection={this.handleSelection}
					tolerance={this.state.tolerance}
					globalMouse={this.state.isGlobal}
					distance={this.state.distance}>
          {
            this.state.boxes.map((box) => {

              const boxStyle = {
                left: box.boxLeft,
                top: box.boxTop,
                width: box.boxWidth,
                height: box.boxHeight,
                zIndex: 9000,
                position: 'absolute',
                cursor: 'default'
              };

              const spanStyle = {
                backgroundColor: 'rgba(49, 150, 245, .2)',
                width: '100%',
                height: '100%',
                float: 'left'
              };

              return <div style={boxStyle} ref="selectbox"><span style={spanStyle}></span></div>
            })
          }

          <img src="http://img.docstoccdn.com/thumb/orig/4510249.png" />

				</SelectableGroup>
				<SelectableGroup
					className="main"
					style={{position: 'relative'}}
					ref="selectable"
					onSelection={this.handleSelection}
					tolerance={this.state.tolerance}
					globalMouse={this.state.isGlobal}
					distance={this.state.distance}>
					{
						this.state.boxes.map((box) => {

							const boxStyle = {
								left: box.boxLeft,
								top: box.boxTop,
								width: box.boxWidth,
								height: box.boxHeight,
								zIndex: 9000,
								position: 'absolute',
								cursor: 'default'
							};

							const spanStyle = {
								backgroundColor: 'transparent',
								border: '1px dashed #999',
								width: '100%',
								height: '100%',
								float: 'left'
							};

							return <div style={boxStyle} ref="selectbox"><span style={spanStyle}></span></div>
						})
					}

					<img src="http://img.docstoccdn.com/thumb/orig/4510249.png" />

				</SelectableGroup>
			</div>

		);
	}
}
