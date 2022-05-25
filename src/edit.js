import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup, PanelBody, ToolbarGroup
} from '@wordpress/components';
import namespace from './namespace';
import setClassName from './setClassName';

export default function Edit ({ attributes, setAttributes }) {
	const { size } = attributes;
	let className = setClassName(attributes);

	return (
		<div
			{...useBlockProps({ className })}
		>
			<BlockControls>
				<ToolbarGroup>

				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody>
					<h2>Box Padding</h2>
					<RadioGroup
						id="size-radiogroup"
						label={__('Stack size', namespace)}
						checked={size}
						onChange={(value) => setAttributes({ size: value })}
					>
						<Radio value="none">None</Radio>
						<Radio value="small">Small</Radio>
						<Radio value="medium">Medium</Radio>
						<Radio value="large">Large</Radio>
					</RadioGroup>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
