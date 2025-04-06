import React from 'react';
import {render, screen} from '@testing-library/react-native'
import SvgAvatar from './assets/avatar_svg_handler.js';
import AvatarScreen from './src/screens/AvatarScreen.js';

test('Dependencies are defined', () => {

    expect(SvgAvatar).toBeDefined();
    expect(AvatarScreen).toBeDefined();

  });

test('SvgAvatar renders correctly', ()=>{
    expect(render(<SvgAvatar />)).toBeDefined();
});

test('AvatarScreen renders correctly', ()=>{
    expect(render(<AvatarScreen />)).toBeDefined();
});
test('All components render', async ()=>{
    render(<SvgAvatar />);
    //get the components
    const legs = screen.queryByTestId('Legs');
    expect(legs).toBeDefined();
    const head = screen.queryByTestId('Head');
    expect(legs).toBeDefined();
    const lf_arm = screen.queryByTestId('Lf_Arm');
    expect(legs).toBeDefined();
    const rt_arm = screen.queryByTestId('Rt_Arm');
    expect(legs).toBeDefined();
    const chest = screen.queryByTestId('Chest');
});
test('Entire SVG renders on screen', ()=>{
    render(<AvatarScreen />);
    const svg = screen.queryByTestId('SVG');
    expect(svg).toBeDefined();
});