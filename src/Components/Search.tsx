// Global Imports
import * as React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

// Local Imports
import { SearchStyle } from "@Styles";
import { ISearch } from "@Interfaces";

// TODO: test if the problem is with require images

export class SearchComponent extends React.PureComponent<ISearch, {}> {
	public render(): JSX.Element {
		const {
			SearchInputProps,
			placeholderTextColor,
			onClose,
			setText,
			forceSelect,
			searchText,
			onBackRequest,
			backButtonDisabled,
		} = this.props;
		return (
			<View style={SearchStyle.searchArea}>
				{this.touchableOpacityButton(
					onBackRequest,
					require("../Assets/Images/left-arrow.png"),
					SearchStyle.leftBtn,
					SearchStyle.backButton
				)}
				<TextInput
					placeholder={searchText}
					placeholderTextColor={placeholderTextColor}
					style={[
						SearchStyle.textInput,
						forceSelect && SearchStyle.nonCloseButton,
						backButtonDisabled && SearchStyle.nonBackButton,
					]}
					underlineColorAndroid={"transparent"}
					onChangeText={(text: string) => setText(text)}
					{...SearchInputProps}
				/>
				{this.touchableOpacityButton(
					onClose,
					require("../Assets/Images/close.png"),
					SearchStyle.leftBtn,
					SearchStyle.closeButton
				)}
			</View>
		);
	}
	public touchableOpacityButton(
		onPress,
		imgSrc,
		buttonStyle,
		imgStyle
	): JSX.Element {
		return (
			<TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
				<Image source={imgSrc} style={imgStyle} />
			</TouchableOpacity>
		);
	}
}
