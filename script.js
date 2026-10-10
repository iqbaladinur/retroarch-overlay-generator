// DOM Elements
const resolutionSelect = document.getElementById('resolution');
const customResolutionDiv = document.getElementById('customResolution');
const customWidthInput = document.getElementById('customWidth');
const customHeightInput = document.getElementById('customHeight');
const overlayTypeSelect = document.getElementById('overlayType');
const previewImageInput = document.getElementById('previewImage');
const clearImageBtn = document.getElementById('clearImage');
const overlayToggle = document.getElementById('overlayToggle');
const imageAspectRatioSelect = document.getElementById('imageAspectRatio');
const customAspectRatioDiv = document.getElementById('customAspectRatio');
const customAspectWidthInput = document.getElementById('customAspectWidth');
const customAspectHeightInput = document.getElementById('customAspectHeight');
const aspectRatioBaseGroup = document.getElementById('aspectRatioBaseGroup');
const aspectRatioBaseSelect = document.getElementById('aspectRatioBase');
const imagePositionSelect = document.getElementById('imagePosition');
const imageScalingModeSelect = document.getElementById('imageScalingMode');
const integerAxisGroup = document.getElementById('integerAxisGroup');
const integerScaleAxisSelect = document.getElementById('integerScaleAxis');
const contentSizeGroup = document.getElementById('contentSizeGroup');
const contentSizeValue = document.getElementById('contentSizeValue');
const contentSourceWidthInput = document.getElementById('contentSourceWidth');
const contentSourceHeightInput = document.getElementById('contentSourceHeight');

// Frame controls
const frameToggle = document.getElementById('frameToggle');
const frameConfig = document.getElementById('frameConfig');
const frameTopInput = document.getElementById('frameTop');
const frameTopValue = document.getElementById('frameTopValue');
const frameRightInput = document.getElementById('frameRight');
const frameRightValue = document.getElementById('frameRightValue');
const frameBottomInput = document.getElementById('frameBottom');
const frameBottomValue = document.getElementById('frameBottomValue');
const frameLeftInput = document.getElementById('frameLeft');
const frameLeftValue = document.getElementById('frameLeftValue');
const frameColorInput = document.getElementById('frameColor');
const frameOpacityInput = document.getElementById('frameOpacity');
const frameOpacityValue = document.getElementById('frameOpacityValue');
const frameShadowBlurInput = document.getElementById('frameShadowBlur');
const frameShadowBlurValue = document.getElementById('frameShadowBlurValue');
const frameShadowXInput = document.getElementById('frameShadowX');
const frameShadowXValue = document.getElementById('frameShadowXValue');
const frameShadowYInput = document.getElementById('frameShadowY');
const frameShadowYValue = document.getElementById('frameShadowYValue');
const frameShadowColorInput = document.getElementById('frameShadowColor');
const logoPositionSelect = document.getElementById('logoPosition');
const logoImageInput = document.getElementById('logoImage');
const clearLogoBtn = document.getElementById('clearLogo');
const logoSizeInput = document.getElementById('logoSize');
const logoSizeValue = document.getElementById('logoSizeValue');

// Scanlines controls
const scanlinesControls = document.getElementById('scanlinesControls');
const scanlineHeightInput = document.getElementById('scanlineHeight');
const scanlineHeightValue = document.getElementById('scanlineHeightValue');
const scanlineGapInput = document.getElementById('scanlineGap');
const scanlineGapValue = document.getElementById('scanlineGapValue');
const scanlineColorInput = document.getElementById('scanlineColor');
const scanlineOpacityInput = document.getElementById('scanlineOpacity');
const scanlineOpacityValue = document.getElementById('scanlineOpacityValue');

// Dot matrix controls
const dotmatrixControls = document.getElementById('dotmatrixControls');
const dotSizeInput = document.getElementById('dotSize');
const dotSizeValue = document.getElementById('dotSizeValue');
const dotSpacingInput = document.getElementById('dotSpacing');
const dotSpacingValue = document.getElementById('dotSpacingValue');
const dotColorInput = document.getElementById('dotColor');
const dotOpacityInput = document.getElementById('dotOpacity');
const dotOpacityValue = document.getElementById('dotOpacityValue');

// Pixel Grid controls
const pixelgridControls = document.getElementById('pixelgridControls');
const pixelGridSizeInput = document.getElementById('pixelGridSize');
const pixelGridSizeValue = document.getElementById('pixelGridSizeValue');
const pixelGridThicknessInput = document.getElementById('pixelGridThickness');
const pixelGridThicknessValue = document.getElementById('pixelGridThicknessValue');
const pixelGridColorInput = document.getElementById('pixelGridColor');
const pixelGridOpacityInput = document.getElementById('pixelGridOpacity');
const pixelGridOpacityValue = document.getElementById('pixelGridOpacityValue');

// Shadow Mask controls
const shadowmaskControls = document.getElementById('shadowmaskControls');
const shadowMaskSizeInput = document.getElementById('shadowMaskSize');
const shadowMaskSizeValue = document.getElementById('shadowMaskSizeValue');
const shadowMaskSpacingInput = document.getElementById('shadowMaskSpacing');
const shadowMaskSpacingValue = document.getElementById('shadowMaskSpacingValue');
const shadowMaskOpacityInput = document.getElementById('shadowMaskOpacity');
const shadowMaskOpacityValue = document.getElementById('shadowMaskOpacityValue');

// Aperture Grille controls
const aperturegrilleControls = document.getElementById('aperturegrilleControls');
const grilleWidthInput = document.getElementById('grilleWidth');
const grilleWidthValue = document.getElementById('grilleWidthValue');
const grilleSpacingInput = document.getElementById('grilleSpacing');
const grilleSpacingValue = document.getElementById('grilleSpacingValue');
const grilleColorInput = document.getElementById('grilleColor');
const grilleOpacityInput = document.getElementById('grilleOpacity');
const grilleOpacityValue = document.getElementById('grilleOpacityValue');

// LCD Grid controls
const lcdgridControls = document.getElementById('lcdgridControls');
const lcdCellSizeInput = document.getElementById('lcdCellSize');
const lcdCellSizeValue = document.getElementById('lcdCellSizeValue');
const lcdGapSizeInput = document.getElementById('lcdGapSize');
const lcdGapSizeValue = document.getElementById('lcdGapSizeValue');
const lcdColorInput = document.getElementById('lcdColor');
const lcdOpacityInput = document.getElementById('lcdOpacity');
const lcdOpacityValue = document.getElementById('lcdOpacityValue');

// Buttons
const downloadBtn = document.getElementById('downloadBtn');

// Canvas
const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');
const previewInfo = document.getElementById('previewInfo');

// Preview image state
let previewImage = null;
let logoImage = null;

// Integer scaling modes and axes, mirroring RetroArch's video settings
// (gfx/video_defines.h: video_scale_integer_scaling / video_scale_integer_axis).
// The half-step axes (Y + X.5, Y.5 + X.5, X.5) only apply to high resolution
// sources, so they are not offered here.
const INTEGER_SCALING_UNDERSCALE = 0;
const INTEGER_SCALING_OVERSCALE = 1;
const INTEGER_SCALING_SMART = 2;

const INTEGER_AXIS_Y = 0;
const INTEGER_AXIS_Y_X = 1;
const INTEGER_AXIS_X = 4;

// Event Listeners
resolutionSelect.addEventListener('change', () => {
    handleResolutionChange();
    updatePreview();
});

overlayTypeSelect.addEventListener('change', () => {
    handleOverlayTypeChange();
    updatePreview();
});

customWidthInput.addEventListener('input', updatePreview);
customHeightInput.addEventListener('input', updatePreview);

// Frame toggle event listener
frameToggle.addEventListener('change', () => {
    frameConfig.style.display = frameToggle.checked ? 'block' : 'none';
    updatePreview();
});

// Frame event listeners
frameTopInput.addEventListener('input', () => {
    frameTopValue.textContent = formatValue(frameTopInput.value) + 'px';
    updatePreview();
});
frameRightInput.addEventListener('input', () => {
    frameRightValue.textContent = formatValue(frameRightInput.value) + 'px';
    updatePreview();
});
frameBottomInput.addEventListener('input', () => {
    frameBottomValue.textContent = formatValue(frameBottomInput.value) + 'px';
    updatePreview();
});
frameLeftInput.addEventListener('input', () => {
    frameLeftValue.textContent = formatValue(frameLeftInput.value) + 'px';
    updatePreview();
});
frameColorInput.addEventListener('input', updatePreview);
frameOpacityInput.addEventListener('input', () => {
    frameOpacityValue.textContent = formatValue(frameOpacityInput.value) + '%';
    updatePreview();
});
frameShadowBlurInput.addEventListener('input', () => {
    frameShadowBlurValue.textContent = formatValue(frameShadowBlurInput.value) + 'px';
    updatePreview();
});
frameShadowXInput.addEventListener('input', () => {
    frameShadowXValue.textContent = formatValue(frameShadowXInput.value) + 'px';
    updatePreview();
});
frameShadowYInput.addEventListener('input', () => {
    frameShadowYValue.textContent = formatValue(frameShadowYInput.value) + 'px';
    updatePreview();
});
frameShadowColorInput.addEventListener('input', updatePreview);
logoPositionSelect.addEventListener('change', updatePreview);
logoSizeInput.addEventListener('input', () => {
    logoSizeValue.textContent = formatValue(logoSizeInput.value) + 'px';
    updatePreview();
});

// Logo upload event listeners
logoImageInput.addEventListener('change', handleLogoUpload);
clearLogoBtn.addEventListener('click', clearLogo);

// Scanlines event listeners
scanlineHeightInput.addEventListener('input', () => {
    scanlineHeightValue.textContent = formatValue(scanlineHeightInput.value) + 'px';
    updatePreview();
});
scanlineGapInput.addEventListener('input', () => {
    scanlineGapValue.textContent = formatValue(scanlineGapInput.value) + 'px';
    updatePreview();
});
scanlineColorInput.addEventListener('input', updatePreview);
scanlineOpacityInput.addEventListener('input', () => {
    scanlineOpacityValue.textContent = formatValue(scanlineOpacityInput.value) + '%';
    updatePreview();
});

// Dot matrix event listeners
dotSizeInput.addEventListener('input', () => {
    dotSizeValue.textContent = formatValue(dotSizeInput.value) + 'px';
    updatePreview();
});
dotSpacingInput.addEventListener('input', () => {
    dotSpacingValue.textContent = formatValue(dotSpacingInput.value) + 'px';
    updatePreview();
});
dotColorInput.addEventListener('input', updatePreview);
dotOpacityInput.addEventListener('input', () => {
    dotOpacityValue.textContent = formatValue(dotOpacityInput.value) + '%';
    updatePreview();
});

downloadBtn.addEventListener('click', downloadOverlay);

// Preview image event listeners
previewImageInput.addEventListener('change', handleImageUpload);
clearImageBtn.addEventListener('click', clearPreviewImage);

// Overlay toggle event listener
overlayToggle.addEventListener('change', updatePreview);

// Image aspect ratio event listeners
imageAspectRatioSelect.addEventListener('change', () => {
    handleAspectRatioChange();
    updatePreview();
});
customAspectWidthInput.addEventListener('input', updatePreview);
customAspectHeightInput.addEventListener('input', updatePreview);
aspectRatioBaseSelect.addEventListener('change', () => {
    updateImagePositionOptions();
    updatePreview();
});
imagePositionSelect.addEventListener('change', updatePreview);

// Image scaling mode event listeners
imageScalingModeSelect.addEventListener('change', () => {
    handleScalingModeChange();
    updatePreview();
});
integerScaleAxisSelect.addEventListener('change', updatePreview);
contentSourceWidthInput.addEventListener('input', () => {
    updateContentSizeLabel();
    updatePreview();
});
contentSourceHeightInput.addEventListener('input', () => {
    updateContentSizeLabel();
    updatePreview();
});

// Pixel Grid event listeners
pixelGridSizeInput.addEventListener('input', () => {
    pixelGridSizeValue.textContent = formatValue(pixelGridSizeInput.value) + 'px';
    updatePreview();
});
pixelGridThicknessInput.addEventListener('input', () => {
    pixelGridThicknessValue.textContent = formatValue(pixelGridThicknessInput.value) + 'px';
    updatePreview();
});
pixelGridColorInput.addEventListener('input', updatePreview);
pixelGridOpacityInput.addEventListener('input', () => {
    pixelGridOpacityValue.textContent = formatValue(pixelGridOpacityInput.value) + '%';
    updatePreview();
});

// Shadow Mask event listeners
shadowMaskSizeInput.addEventListener('input', () => {
    shadowMaskSizeValue.textContent = formatValue(shadowMaskSizeInput.value) + 'px';
    updatePreview();
});
shadowMaskSpacingInput.addEventListener('input', () => {
    shadowMaskSpacingValue.textContent = formatValue(shadowMaskSpacingInput.value) + 'px';
    updatePreview();
});
shadowMaskOpacityInput.addEventListener('input', () => {
    shadowMaskOpacityValue.textContent = formatValue(shadowMaskOpacityInput.value) + '%';
    updatePreview();
});

// Aperture Grille event listeners
grilleWidthInput.addEventListener('input', () => {
    grilleWidthValue.textContent = formatValue(grilleWidthInput.value) + 'px';
    updatePreview();
});
grilleSpacingInput.addEventListener('input', () => {
    grilleSpacingValue.textContent = formatValue(grilleSpacingInput.value) + 'px';
    updatePreview();
});
grilleColorInput.addEventListener('input', updatePreview);
grilleOpacityInput.addEventListener('input', () => {
    grilleOpacityValue.textContent = formatValue(grilleOpacityInput.value) + '%';
    updatePreview();
});

// LCD Grid event listeners
lcdCellSizeInput.addEventListener('input', () => {
    lcdCellSizeValue.textContent = formatValue(lcdCellSizeInput.value) + 'px';
    updatePreview();
});
lcdGapSizeInput.addEventListener('input', () => {
    lcdGapSizeValue.textContent = formatValue(lcdGapSizeInput.value) + 'px';
    updatePreview();
});
lcdColorInput.addEventListener('input', updatePreview);
lcdOpacityInput.addEventListener('input', () => {
    lcdOpacityValue.textContent = formatValue(lcdOpacityInput.value) + '%';
    updatePreview();
});

// Functions
function formatValue(value) {
    // Format decimal values - remove .0 but keep .5
    const num = parseFloat(value);
    return num % 1 === 0 ? Math.floor(num) : num;
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                previewImage = img;
                // Default the integer-scaling content size to the image's own size.
                contentSourceWidthInput.value = img.naturalWidth;
                contentSourceHeightInput.value = img.naturalHeight;
                updateContentSizeLabel();
                clearImageBtn.style.display = 'inline-flex';
                updatePreview();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function clearPreviewImage() {
    previewImage = null;
    previewImageInput.value = '';
    contentSourceWidthInput.value = '';
    contentSourceHeightInput.value = '';
    updateContentSizeLabel();
    clearImageBtn.style.display = 'none';
    updatePreview();
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                logoImage = img;
                clearLogoBtn.style.display = 'inline-flex';
                updatePreview();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function clearLogo() {
    logoImage = null;
    logoImageInput.value = '';
    clearLogoBtn.style.display = 'none';
    updatePreview();
}

function handleResolutionChange() {
    if (resolutionSelect.value === 'custom') {
        customResolutionDiv.classList.add('active');
    } else {
        customResolutionDiv.classList.remove('active');
    }
}

function handleAspectRatioChange() {
    const aspectRatioValue = imageAspectRatioSelect.value;

    if (aspectRatioValue === 'custom') {
        customAspectRatioDiv.classList.add('active');
    } else {
        customAspectRatioDiv.classList.remove('active');
    }

    // Show aspect ratio base selector only when a non-integer fit is used
    if (aspectRatioValue !== 'none' && !isIntegerScaling()) {
        aspectRatioBaseGroup.style.display = 'block';
    } else {
        aspectRatioBaseGroup.style.display = 'none';
    }

    updateImagePositionOptions();
}

// The integer scaling modes come from RetroArch's video scaling settings:
//   Integer Scale Scaling -> Underscale / Overscale / Smart
//   Integer Scale Axis    -> Y / Y + X / X
function isIntegerScaling() {
    return imageScalingModeSelect.value !== 'fit';
}

function getIntegerScalingMode() {
    switch (imageScalingModeSelect.value) {
        case 'integer-overscale':
            return INTEGER_SCALING_OVERSCALE;
        case 'integer-smart':
            return INTEGER_SCALING_SMART;
        case 'integer-underscale':
            return INTEGER_SCALING_UNDERSCALE;
        default:
            return null;
    }
}

function getIntegerScalingAxis() {
    switch (integerScaleAxisSelect.value) {
        case 'yx':
            return INTEGER_AXIS_Y_X;
        case 'x':
            return INTEGER_AXIS_X;
        default:
            return INTEGER_AXIS_Y;
    }
}

function handleScalingModeChange() {
    const integer = isIntegerScaling();

    integerAxisGroup.style.display = integer ? 'block' : 'none';
    contentSizeGroup.style.display = integer ? 'block' : 'none';
    canvas.classList.toggle('pixelated', integer);

    // Integer scaling defines its own content geometry, so the fit-based
    // aspect ratio base no longer applies.
    if (!integer && imageAspectRatioSelect.value !== 'none') {
        aspectRatioBaseGroup.style.display = 'block';
    } else {
        aspectRatioBaseGroup.style.display = 'none';
    }

    updateImagePositionOptions();
    updateContentSizeLabel();
}

function updateImagePositionOptions() {
    const currentValue = imagePositionSelect.value;
    const base = aspectRatioBaseSelect.value;

    // Clear current options
    imagePositionSelect.innerHTML = '';

    if (isIntegerScaling()) {
        // Integer scaling can leave letterboxing on both axes, so every
        // edge is a valid bias target.
        imagePositionSelect.innerHTML = `
            <option value="center">Center</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
        `;
    } else if (base === 'width') {
        // Width-based: show vertical positions
        imagePositionSelect.innerHTML = `
            <option value="center">Center (Vertical)</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        `;
    } else {
        // Height-based: show horizontal positions
        imagePositionSelect.innerHTML = `
            <option value="center">Center (Horizontal)</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
        `;
    }

    // Try to preserve selection if possible, otherwise default to center
    if (imagePositionSelect.querySelector(`option[value="${currentValue}"]`)) {
        imagePositionSelect.value = currentValue;
    } else {
        imagePositionSelect.value = 'center';
    }
}

// The uploaded image can be a screenshot of an upscaled framebuffer, so the
// native resolution of the emulated content is an explicit, optional input.
function getContentSize() {
    if (!previewImage) {
        return null;
    }

    const width = parseInt(contentSourceWidthInput.value) || previewImage.naturalWidth;
    const height = parseInt(contentSourceHeightInput.value) || previewImage.naturalHeight;

    return { width, height };
}

function updateContentSizeLabel() {
    if (!previewImage) {
        contentSizeValue.textContent = 'no image';
        return;
    }

    const size = getContentSize();
    const isAuto = !parseInt(contentSourceWidthInput.value) && !parseInt(contentSourceHeightInput.value);

    contentSizeValue.textContent = isAuto
        ? `auto • ${size.width}×${size.height}`
        : `${size.width}×${size.height}`;
}

function handleOverlayTypeChange() {
    const overlayType = overlayTypeSelect.value;

    // Remove active class from all settings cards
    scanlinesControls.classList.remove('active');
    dotmatrixControls.classList.remove('active');
    pixelgridControls.classList.remove('active');
    shadowmaskControls.classList.remove('active');
    aperturegrilleControls.classList.remove('active');
    lcdgridControls.classList.remove('active');

    // Add active class to the current overlay type
    switch (overlayType) {
        case 'scanlines':
            scanlinesControls.classList.add('active');
            break;
        case 'dotmatrix':
            dotmatrixControls.classList.add('active');
            break;
        case 'pixelgrid':
            pixelgridControls.classList.add('active');
            break;
        case 'shadowmask':
            shadowmaskControls.classList.add('active');
            break;
        case 'aperturegrille':
            aperturegrilleControls.classList.add('active');
            break;
        case 'lcdgrid':
            lcdgridControls.classList.add('active');
            break;
        case 'none':
            // No overlay selected
            break;
    }
}

function getResolution() {
    if (resolutionSelect.value === 'custom') {
        return {
            width: parseInt(customWidthInput.value) || 640,
            height: parseInt(customHeightInput.value) || 480
        };
    } else {
        const [width, height] = resolutionSelect.value.split('x').map(Number);
        return { width, height };
    }
}

function getAspectRatio() {
    const aspectRatioValue = imageAspectRatioSelect.value;

    if (aspectRatioValue === 'none') {
        return null;
    } else if (aspectRatioValue === 'custom') {
        const w = parseInt(customAspectWidthInput.value) || 16;
        const h = parseInt(customAspectHeightInput.value) || 9;
        return w / h;
    } else {
        const [w, h] = aspectRatioValue.split(':').map(Number);
        return w / h;
    }
}

// Margin/letterbox bias for a position choice (RetroArch's viewport bias).
function getPositionBias(position) {
    switch (position) {
        case 'top':
            return { x: 0.5, y: 0 };
        case 'bottom':
            return { x: 0.5, y: 1 };
        case 'left':
            return { x: 0, y: 0.5 };
        case 'right':
            return { x: 1, y: 0.5 };
        default:
            return { x: 0.5, y: 0.5 };
    }
}

// Port of RetroArch's video_viewport_get_scaled_integer() (gfx/video_driver.c)
// for a non-rotated, y-down viewport.
//
// canvasWidth/canvasHeight : target display size
// frameWidth/frameHeight   : native content size (core-reported geometry)
// aspectRatio              : desired content aspect ratio (width / height)
// scaling                  : INTEGER_SCALING_*
// axis                     : INTEGER_AXIS_*
// biasX/biasY              : 0..1 placement of the leftover margin
//
// Returns null when RetroArch would fall back to regular (non-integer)
// scaling: no room for 1x, or a Smart mode rejection.
function computeIntegerViewport(canvasWidth, canvasHeight, frameWidth, frameHeight,
                                aspectRatio, scaling, axis, biasX, biasY) {
    let width = canvasWidth;
    let height = canvasHeight;
    let x = 0;
    let y = 0;
    let paddingX = 0;
    let paddingY = 0;
    const halfW = 0; // half steps are not offered
    const halfH = 0;

    let contentWidth = 0;
    let contentHeight = 0;
    let maxScale = 1;
    let maxScaleW = 1;
    let maxScaleH = 1;

    // Account for non-square pixels: the width comes from the aspect ratio.
    contentHeight = frameHeight;
    contentWidth = Math.round(contentHeight * aspectRatio);

    if (contentWidth < 2 || contentHeight < 2) {
        return null;
    }

    // Use regular scaling if there is no room for 1x.
    if (contentWidth > width || contentHeight > height) {
        return null;
    }

    contentWidth = Math.min(contentWidth, width);
    contentHeight = Math.min(contentHeight, height);

    if (scaling === INTEGER_SCALING_SMART) {
        // Overscale if only overscan or a small number of rows get cropped.
        // Otherwise underscale if the smallest margin doesn't exceed 12%.
        // Otherwise fall back to non-integer scaling.
        const underscaleW = Math.floor(width / contentWidth);
        const underscaleH = Math.floor(height / contentHeight);

        // Always check whether the next integer factor is a usable overscale,
        // even when the underscale factor already fills the screen (e.g. 240p
        // at 4k: x9 fills the height, but x10 only crops overscan).
        const overscaleH = underscaleH + 1;
        let smartScaleH = underscaleH;

        // Minimum amount of content that must remain visible for overscale.
        let overscaleMinHeight = contentHeight - 6;
        if (contentHeight >= 192 && contentHeight <= 240) {
            // 240p sources: 192 is the title safe area (80% of 240).
            overscaleMinHeight = 192;
        } else if (contentHeight >= 192 * 2 && contentHeight <= 480) {
            // 480p sources use the 240p thresholds, doubled.
            overscaleMinHeight = 192 * 2;
        } else if (contentHeight > 240 && contentHeight <= 288) {
            // Allow PAL to overscale without rotation.
            overscaleMinHeight = 288 - 18;
        } else if (contentHeight > 480 && contentHeight <= 576) {
            overscaleMinHeight = 576 - 36;
        }

        if (Math.floor(height / overscaleH) >= overscaleMinHeight) {
            smartScaleH = overscaleH;
        }

        maxScale = Math.min(underscaleW, smartScaleH);
    } else if (scaling === INTEGER_SCALING_OVERSCALE) {
        maxScale = Math.min(
            Math.floor(width / contentWidth) + (width % contentWidth ? 1 : 0),
            Math.floor(height / contentHeight) + (height % contentHeight ? 1 : 0)
        );
    } else {
        maxScale = Math.min(
            Math.floor(width / contentWidth),
            Math.floor(height / contentHeight)
        );
    }

    maxScaleW = maxScale;
    maxScaleH = maxScale;

    if (axis >= INTEGER_AXIS_Y_X) {
        // Pick the nearest width multiplier that preserves the aspect ratio.
        const targetRatio = contentWidth / contentHeight;
        const heightThreshold = height * 1.12;
        let underscaleRatio = 0;
        let overscaleRatio = 0;
        let i = 0;

        // Reset the width to the frame's exact width: contentWidth has been
        // replaced by the aspect-corrected width, and multiplying that would
        // skip integer multiples of the real frame width.
        contentWidth = frameWidth;

        const overscaleW = Math.floor(width / contentWidth) + (width % contentWidth ? 1 : 0);

        if (axis >= INTEGER_AXIS_X) {
            contentHeight = Math.round(contentWidth / aspectRatio);
            const overscaleH = Math.floor(height / contentHeight) + (height % contentHeight ? 1 : 0);

            // Use regular scaling if there is no room for 1x.
            if (contentWidth > width || contentHeight > height) {
                return null;
            }

            if (scaling === INTEGER_SCALING_SMART) {
                maxScaleH = (contentHeight * overscaleH > heightThreshold)
                    ? overscaleH - 1
                    : overscaleH;
            } else if (scaling === INTEGER_SCALING_OVERSCALE) {
                maxScaleH = overscaleH;
            } else {
                maxScaleH = overscaleH - 1;
            }
        }

        // Populate the ratios.
        for (i = 1; i < overscaleW + 1; i++) {
            const scaleWRatio = (contentWidth * i) / (contentHeight * maxScaleH);

            if (scaleWRatio > targetRatio) {
                overscaleRatio = scaleWRatio;
                break;
            }
            underscaleRatio = scaleWRatio;
        }

        // Pick the nearest ratio.
        if (overscaleRatio > 0 && overscaleRatio - targetRatio <= targetRatio - underscaleRatio) {
            maxScaleW = i;
        } else if (i > 1) {
            maxScaleW = i - 1;
        }
    }

    paddingX = width - contentWidth * (maxScaleW + halfW * 0.5);
    paddingY = height - contentHeight * (maxScaleH + halfH * 0.5);

    if (scaling === INTEGER_SCALING_SMART) {
        // Final check: are the underscaling margins too large? Past 12% of the
        // display going unused, a plain non-integer scale looks better (e.g.
        // 480p content on a 720p / 1080p display).
        const widthUtilization = (width - paddingX) / width;
        const heightUtilization = (height - paddingY) / height;

        if (Math.max(widthUtilization, heightUtilization) < 0.88) {
            return null;
        }
    }

    // Use regular scaling if the overscale is unreasonable.
    if (paddingX <= -frameWidth || paddingY <= -frameHeight) {
        return null;
    }

    width -= paddingX;
    height -= paddingY;
    x += paddingX * biasX;
    y += paddingY * biasY;

    return {
        x,
        y,
        width,
        height,
        scaleW: maxScaleW + halfW * 0.5,
        scaleH: maxScaleH + halfH * 0.5,
        paddingX,
        paddingY,
        utilization: Math.max((canvasWidth - paddingX) / canvasWidth,
                              (canvasHeight - paddingY) / canvasHeight)
    };
}

// Aspect-preserving "contain" fit, used both by the non-integer mode and as
// RetroArch's regular-scaling fallback when integer scaling is impossible.
function computeContainViewport(canvasWidth, canvasHeight, contentWidth, contentHeight, biasX, biasY) {
    const scale = Math.min(canvasWidth / contentWidth, canvasHeight / contentHeight);
    const width = contentWidth * scale;
    const height = contentHeight * scale;

    return {
        x: (canvasWidth - width) * biasX,
        y: (canvasHeight - height) * biasY,
        width,
        height
    };
}

// Draws the preview image and returns a description of the scaling that was
// applied, so the preview info bar can report it.
function drawPreviewImage(context, image, resolution) {
    const aspectRatio = getAspectRatio();
    const base = aspectRatioBaseSelect.value;
    const bias = getPositionBias(imagePositionSelect.value);
    const scalingMode = getIntegerScalingMode();
    let info = null;

    if (scalingMode !== null) {
        const content = getContentSize();
        const contentAspect = aspectRatio === null
            ? content.width / content.height
            : aspectRatio;

        // Integer scaling is pixel-perfect, so never let the canvas smooth it.
        context.imageSmoothingEnabled = false;

        const viewport = computeIntegerViewport(
            resolution.width, resolution.height,
            content.width, content.height,
            contentAspect, scalingMode, getIntegerScalingAxis(),
            bias.x, bias.y
        );

        if (viewport) {
            context.drawImage(image, viewport.x, viewport.y, viewport.width, viewport.height);
            info = { fallback: false, viewport };
        } else {
            // RetroArch falls back to regular, non-integer scaling.
            const contentWidth = Math.round(content.height * contentAspect);
            const fit = computeContainViewport(resolution.width, resolution.height,
                contentWidth, content.height, bias.x, bias.y);
            context.drawImage(image, fit.x, fit.y, fit.width, fit.height);
            info = { fallback: true, viewport: null };
        }

        context.imageSmoothingEnabled = true;
        return info;
    }

    context.imageSmoothingEnabled = true;

    if (aspectRatio === null) {
        // No aspect ratio constraint - scale to fill canvas
        context.drawImage(image, 0, 0, resolution.width, resolution.height);
        return info;
    }

    let drawWidth;
    let drawHeight;
    let drawX;
    let drawY;

    if (base === 'width') {
        // Width-based: width = resolution width, calculate height
        drawWidth = resolution.width;
        drawHeight = drawWidth / aspectRatio;
        drawX = 0;
        drawY = (resolution.height - drawHeight) * bias.y;
    } else {
        // Height-based: height = resolution height, calculate width
        drawHeight = resolution.height;
        drawWidth = drawHeight * aspectRatio;
        drawY = 0;
        drawX = (resolution.width - drawWidth) * bias.x;
    }

    // Draw image with aspect ratio constraint
    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    return info;
}

function updatePreview() {
    const resolution = getResolution();
    const overlayType = overlayTypeSelect.value;
    const showOverlay = overlayToggle.checked;

    canvas.width = resolution.width;
    canvas.height = resolution.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw preview image if exists
    let scalingInfo = null;
    if (previewImage) {
        scalingInfo = drawPreviewImage(ctx, previewImage, resolution);
    }

    // Draw overlay on top only if toggle is on
    if (showOverlay && overlayType !== 'none') {
        switch (overlayType) {
            case 'scanlines':
                generateScanlines(resolution);
                break;
            case 'dotmatrix':
                generateDotMatrix(resolution);
                break;
            case 'pixelgrid':
                generatePixelGrid(resolution);
                break;
            case 'shadowmask':
                generateShadowMask(resolution);
                break;
            case 'aperturegrille':
                generateApertureGrille(resolution);
                break;
            case 'lcdgrid':
                generateLCDGrid(resolution);
                break;
        }
    }

    // Draw frame separately if enabled
    if (frameToggle.checked) {
        generateFrame(resolution);
    }

    // Draw logo if exists and position is not 'none'
    if (logoImage && logoPositionSelect.value !== 'none') {
        drawLogo(resolution);
    }

    updatePreviewInfo(resolution, overlayType, scalingInfo);
}

function generateFrame(resolution) {
    const top = parseFloat(frameTopInput.value);
    const right = parseFloat(frameRightInput.value);
    const bottom = parseFloat(frameBottomInput.value);
    const left = parseFloat(frameLeftInput.value);
    const color = frameColorInput.value;
    const opacity = parseFloat(frameOpacityInput.value) / 100;
    const shadowBlur = parseFloat(frameShadowBlurInput.value);
    const shadowX = parseFloat(frameShadowXInput.value);
    const shadowY = parseFloat(frameShadowYInput.value);
    const shadowColor = frameShadowColorInput.value;

    // Convert hex color to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Set shadow if blur > 0
    if (shadowBlur > 0) {
        ctx.shadowBlur = shadowBlur;
        ctx.shadowOffsetX = shadowX;
        ctx.shadowOffsetY = shadowY;
        ctx.shadowColor = shadowColor;
    }

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    // Top border
    if (top > 0) {
        ctx.fillRect(0, 0, resolution.width, top);
    }

    // Bottom border
    if (bottom > 0) {
        ctx.fillRect(0, resolution.height - bottom, resolution.width, bottom);
    }

    // Left border
    if (left > 0) {
        ctx.fillRect(0, 0, left, resolution.height);
    }

    // Right border
    if (right > 0) {
        ctx.fillRect(resolution.width - right, 0, right, resolution.height);
    }

    // Reset shadow
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

function drawLogo(resolution) {
    const position = logoPositionSelect.value;
    const logoSize = parseFloat(logoSizeInput.value);

    // Calculate logo dimensions maintaining aspect ratio
    const aspectRatio = logoImage.width / logoImage.height;
    let drawWidth, drawHeight;

    if (aspectRatio > 1) {
        drawWidth = logoSize;
        drawHeight = logoSize / aspectRatio;
    } else {
        drawHeight = logoSize;
        drawWidth = logoSize * aspectRatio;
    }

    // Calculate position - logo overlaps with frame (positioned from canvas edges)
    let x, y;
    const margin = 10; // Margin from canvas edge

    switch (position) {
        case 'bottom-center':
            x = (resolution.width - drawWidth) / 2;
            y = resolution.height - drawHeight - margin;
            break;
        case 'top-center':
            x = (resolution.width - drawWidth) / 2;
            y = margin;
            break;
        case 'center':
            x = (resolution.width - drawWidth) / 2;
            y = (resolution.height - drawHeight) / 2;
            break;
        case 'bottom-left':
            x = margin;
            y = resolution.height - drawHeight - margin;
            break;
        case 'bottom-right':
            x = resolution.width - drawWidth - margin;
            y = resolution.height - drawHeight - margin;
            break;
    }

    ctx.drawImage(logoImage, x, y, drawWidth, drawHeight);
}

function generateScanlines(resolution) {
    const lineHeight = parseFloat(scanlineHeightInput.value);
    const gapHeight = parseFloat(scanlineGapInput.value);
    const color = scanlineColorInput.value;
    const opacity = parseFloat(scanlineOpacityInput.value) / 100;

    // Convert hex color to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalHeight = lineHeight + gapHeight;

    for (let y = 0; y < resolution.height; y += totalHeight) {
        ctx.fillRect(0, y, resolution.width, lineHeight);
    }
}

function generateDotMatrix(resolution) {
    const dotSize = parseFloat(dotSizeInput.value);
    const spacing = parseFloat(dotSpacingInput.value);
    const color = dotColorInput.value;
    const opacity = parseFloat(dotOpacityInput.value) / 100;

    // Convert hex color to rgba
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const step = dotSize + spacing;

    for (let y = 0; y < resolution.height; y += step) {
        for (let x = 0; x < resolution.width; x += step) {
            // Draw circular dot
            ctx.beginPath();
            ctx.arc(x + dotSize / 2, y + dotSize / 2, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function generatePixelGrid(resolution) {
    const gridSize = parseFloat(pixelGridSizeInput.value);
    const thickness = parseFloat(pixelGridThicknessInput.value);
    const color = pixelGridColorInput.value;
    const opacity = parseFloat(pixelGridOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    ctx.lineWidth = thickness;

    // Draw vertical lines
    for (let x = gridSize; x < resolution.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, resolution.height);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = gridSize; y < resolution.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(resolution.width, y);
        ctx.stroke();
    }
}

function generateShadowMask(resolution) {
    const dotSize = parseFloat(shadowMaskSizeInput.value);
    const spacing = parseFloat(shadowMaskSpacingInput.value);
    const opacity = parseFloat(shadowMaskOpacityInput.value) / 100;

    const step = dotSize + spacing;

    // Shadow mask creates RGB triads in a triangular pattern
    for (let y = 0; y < resolution.height; y += step * 1.5) {
        for (let x = 0; x < resolution.width; x += step * 3) {
            const offsetY = (x / (step * 3)) % 2 === 0 ? 0 : step * 0.75;

            // Red dot
            ctx.fillStyle = `rgba(255, 0, 0, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();

            // Green dot
            ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x + step, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();

            // Blue dot
            ctx.fillStyle = `rgba(0, 0, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x + step * 2, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function generateApertureGrille(resolution) {
    const lineWidth = parseFloat(grilleWidthInput.value);
    const spacing = parseFloat(grilleSpacingInput.value);
    const color = grilleColorInput.value;
    const opacity = parseFloat(grilleOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalWidth = lineWidth + spacing;

    // Draw vertical lines
    for (let x = 0; x < resolution.width; x += totalWidth) {
        ctx.fillRect(x, 0, lineWidth, resolution.height);
    }
}

function generateLCDGrid(resolution) {
    const cellSize = parseFloat(lcdCellSizeInput.value);
    const gapSize = parseFloat(lcdGapSizeInput.value);
    const color = lcdColorInput.value;
    const opacity = parseFloat(lcdOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalSize = cellSize + gapSize;

    // Draw grid pattern
    for (let y = 0; y < resolution.height; y += totalSize) {
        for (let x = 0; x < resolution.width; x += totalSize) {
            // Draw the gap/grid lines around each cell
            ctx.fillRect(x, y, totalSize, gapSize); // Horizontal line
            ctx.fillRect(x, y, gapSize, totalSize); // Vertical line
        }
    }
}

function getScalingInfoText(scalingInfo) {
    if (!previewImage) {
        return '';
    }

    const mode = imageScalingModeSelect.value;
    const modeLabels = {
        'integer-underscale': 'Underscale',
        'integer-overscale': 'Overscale',
        'integer-smart': 'Smart'
    };
    const axisLabels = { y: 'Y', yx: 'Y + X', x: 'X' };

    if (mode === 'fit') {
        return 'Scaling: Fit (non-integer)';
    }

    const label = `Integer ${modeLabels[mode]} (${axisLabels[integerScaleAxisSelect.value]})`;

    if (!scalingInfo || scalingInfo.fallback) {
        // RetroArch drops back to regular scaling when no integer factor is usable.
        return `${label} → Fit (fallback)`;
    }

    const viewport = scalingInfo.viewport;
    const scale = viewport.scaleW === viewport.scaleH
        ? `×${viewport.scaleW}`
        : `×${viewport.scaleW}×${viewport.scaleH}`;

    let text = `${label} ${scale}`;

    const padX = Math.max(0, viewport.paddingX);
    const padY = Math.max(0, viewport.paddingY);
    const cropX = Math.max(0, -viewport.paddingX);
    const cropY = Math.max(0, -viewport.paddingY);

    if (padX > 0 && padY > 0 && !cropX && !cropY) {
        text += ` • pad ${padX}×${padY}`;
    } else {
        const parts = [];
        if (padX) parts.push(`pad X${padX}`);
        if (padY) parts.push(`pad Y${padY}`);
        if (cropX) parts.push(`crop X${cropX}`);
        if (cropY) parts.push(`crop Y${cropY}`);
        if (parts.length) {
            text += ` • ${parts.join(' • ')}`;
        }
    }

    text += ` • fill ${Math.round(viewport.utilization * 100)}%`;

    return text;
}

function updatePreviewInfo(resolution, overlayType, scalingInfo) {
    let typeInfo = '';

    switch (overlayType) {
        case 'scanlines':
            typeInfo = `Scanlines • ${formatValue(scanlineHeightInput.value)}px/${formatValue(scanlineGapInput.value)}px • ${formatValue(scanlineOpacityInput.value)}%`;
            break;
        case 'dotmatrix':
            typeInfo = `Dot Matrix • ${formatValue(dotSizeInput.value)}px/${formatValue(dotSpacingInput.value)}px • ${formatValue(dotOpacityInput.value)}%`;
            break;
        case 'pixelgrid':
            typeInfo = `Pixel Grid • ${formatValue(pixelGridSizeInput.value)}px grid • ${formatValue(pixelGridOpacityInput.value)}%`;
            break;
        case 'shadowmask':
            typeInfo = `Shadow Mask • ${formatValue(shadowMaskSizeInput.value)}px dots • ${formatValue(shadowMaskOpacityInput.value)}%`;
            break;
        case 'aperturegrille':
            typeInfo = `Aperture Grille • ${formatValue(grilleWidthInput.value)}px/${formatValue(grilleSpacingInput.value)}px • ${formatValue(grilleOpacityInput.value)}%`;
            break;
        case 'lcdgrid':
            typeInfo = `LCD Grid • ${formatValue(lcdCellSizeInput.value)}px cells • ${formatValue(lcdOpacityInput.value)}%`;
            break;
        case 'none':
            typeInfo = frameToggle.checked ? 'Frame Only' : 'No Overlay';
            break;
    }

    const scalingInfoText = getScalingInfoText(scalingInfo);

    previewInfo.innerHTML = `
        <span><strong>${resolution.width} × ${resolution.height}</strong></span>
        <span>${typeInfo}</span>
        ${scalingInfoText ? `<span>${scalingInfoText}</span>` : ''}
    `;
}

function downloadOverlay() {
    const resolution = getResolution();
    const overlayType = overlayTypeSelect.value;

    // Create a temporary canvas for download (overlay only, no background image)
    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = resolution.width;
    downloadCanvas.height = resolution.height;
    const downloadCtx = downloadCanvas.getContext('2d');

    // Draw only the overlay (no background image)
    if (overlayType !== 'none') {
        switch (overlayType) {
            case 'scanlines':
                generateScanlinesOnCanvas(downloadCtx, resolution);
                break;
            case 'dotmatrix':
                generateDotMatrixOnCanvas(downloadCtx, resolution);
                break;
            case 'pixelgrid':
                generatePixelGridOnCanvas(downloadCtx, resolution);
                break;
            case 'shadowmask':
                generateShadowMaskOnCanvas(downloadCtx, resolution);
                break;
            case 'aperturegrille':
                generateApertureGrilleOnCanvas(downloadCtx, resolution);
                break;
            case 'lcdgrid':
                generateLCDGridOnCanvas(downloadCtx, resolution);
                break;
        }
    }

    // Draw frame if enabled
    if (frameToggle.checked) {
        generateFrameOnCanvas(downloadCtx, resolution);
    }

    // Draw logo if exists
    if (logoImage && logoPositionSelect.value !== 'none') {
        drawLogoOnCanvas(downloadCtx, resolution);
    }

    // Download the overlay
    downloadCanvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `retroarch_overlay_${overlayType}_${resolution.width}x${resolution.height}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Helper functions to draw overlay on a specific canvas context
function generateFrameOnCanvas(context, resolution) {
    const top = parseFloat(frameTopInput.value);
    const right = parseFloat(frameRightInput.value);
    const bottom = parseFloat(frameBottomInput.value);
    const left = parseFloat(frameLeftInput.value);
    const color = frameColorInput.value;
    const opacity = parseFloat(frameOpacityInput.value) / 100;
    const shadowBlur = parseFloat(frameShadowBlurInput.value);
    const shadowX = parseFloat(frameShadowXInput.value);
    const shadowY = parseFloat(frameShadowYInput.value);
    const shadowColor = frameShadowColorInput.value;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    if (shadowBlur > 0) {
        context.shadowBlur = shadowBlur;
        context.shadowOffsetX = shadowX;
        context.shadowOffsetY = shadowY;
        context.shadowColor = shadowColor;
    }

    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    if (top > 0) context.fillRect(0, 0, resolution.width, top);
    if (bottom > 0) context.fillRect(0, resolution.height - bottom, resolution.width, bottom);
    if (left > 0) context.fillRect(0, 0, left, resolution.height);
    if (right > 0) context.fillRect(resolution.width - right, 0, right, resolution.height);

    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function drawLogoOnCanvas(context, resolution) {
    const position = logoPositionSelect.value;
    const logoSize = parseFloat(logoSizeInput.value);

    const aspectRatio = logoImage.width / logoImage.height;
    let drawWidth, drawHeight;

    if (aspectRatio > 1) {
        drawWidth = logoSize;
        drawHeight = logoSize / aspectRatio;
    } else {
        drawHeight = logoSize;
        drawWidth = logoSize * aspectRatio;
    }

    // Calculate position - logo overlaps with frame (positioned from canvas edges)
    let x, y;
    const margin = 10; // Margin from canvas edge

    switch (position) {
        case 'bottom-center':
            x = (resolution.width - drawWidth) / 2;
            y = resolution.height - drawHeight - margin;
            break;
        case 'top-center':
            x = (resolution.width - drawWidth) / 2;
            y = margin;
            break;
        case 'center':
            x = (resolution.width - drawWidth) / 2;
            y = (resolution.height - drawHeight) / 2;
            break;
        case 'bottom-left':
            x = margin;
            y = resolution.height - drawHeight - margin;
            break;
        case 'bottom-right':
            x = resolution.width - drawWidth - margin;
            y = resolution.height - drawHeight - margin;
            break;
    }

    context.drawImage(logoImage, x, y, drawWidth, drawHeight);
}

function generateScanlinesOnCanvas(context, resolution) {
    const lineHeight = parseFloat(scanlineHeightInput.value);
    const gapHeight = parseFloat(scanlineGapInput.value);
    const color = scanlineColorInput.value;
    const opacity = parseFloat(scanlineOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalHeight = lineHeight + gapHeight;

    for (let y = 0; y < resolution.height; y += totalHeight) {
        context.fillRect(0, y, resolution.width, lineHeight);
    }
}

function generateDotMatrixOnCanvas(context, resolution) {
    const dotSize = parseFloat(dotSizeInput.value);
    const spacing = parseFloat(dotSpacingInput.value);
    const color = dotColorInput.value;
    const opacity = parseFloat(dotOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const step = dotSize + spacing;

    for (let y = 0; y < resolution.height; y += step) {
        for (let x = 0; x < resolution.width; x += step) {
            context.beginPath();
            context.arc(x + dotSize / 2, y + dotSize / 2, dotSize / 2, 0, Math.PI * 2);
            context.fill();
        }
    }
}

function generatePixelGridOnCanvas(context, resolution) {
    const gridSize = parseFloat(pixelGridSizeInput.value);
    const thickness = parseFloat(pixelGridThicknessInput.value);
    const color = pixelGridColorInput.value;
    const opacity = parseFloat(pixelGridOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    context.lineWidth = thickness;

    for (let x = gridSize; x < resolution.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, resolution.height);
        context.stroke();
    }

    for (let y = gridSize; y < resolution.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(resolution.width, y);
        context.stroke();
    }
}

function generateShadowMaskOnCanvas(context, resolution) {
    const dotSize = parseFloat(shadowMaskSizeInput.value);
    const spacing = parseFloat(shadowMaskSpacingInput.value);
    const opacity = parseFloat(shadowMaskOpacityInput.value) / 100;

    const step = dotSize + spacing;

    for (let y = 0; y < resolution.height; y += step * 1.5) {
        for (let x = 0; x < resolution.width; x += step * 3) {
            const offsetY = (x / (step * 3)) % 2 === 0 ? 0 : step * 0.75;

            context.fillStyle = `rgba(255, 0, 0, ${opacity})`;
            context.beginPath();
            context.arc(x, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            context.fill();

            context.fillStyle = `rgba(0, 255, 0, ${opacity})`;
            context.beginPath();
            context.arc(x + step, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            context.fill();

            context.fillStyle = `rgba(0, 0, 255, ${opacity})`;
            context.beginPath();
            context.arc(x + step * 2, y + offsetY, dotSize / 2, 0, Math.PI * 2);
            context.fill();
        }
    }
}

function generateApertureGrilleOnCanvas(context, resolution) {
    const lineWidth = parseFloat(grilleWidthInput.value);
    const spacing = parseFloat(grilleSpacingInput.value);
    const color = grilleColorInput.value;
    const opacity = parseFloat(grilleOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalWidth = lineWidth + spacing;

    for (let x = 0; x < resolution.width; x += totalWidth) {
        context.fillRect(x, 0, lineWidth, resolution.height);
    }
}

function generateLCDGridOnCanvas(context, resolution) {
    const cellSize = parseFloat(lcdCellSizeInput.value);
    const gapSize = parseFloat(lcdGapSizeInput.value);
    const color = lcdColorInput.value;
    const opacity = parseFloat(lcdOpacityInput.value) / 100;

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    const totalSize = cellSize + gapSize;

    for (let y = 0; y < resolution.height; y += totalSize) {
        for (let x = 0; x < resolution.width; x += totalSize) {
            context.fillRect(x, y, totalSize, gapSize);
            context.fillRect(x, y, gapSize, totalSize);
        }
    }
}

// Initialize
handleOverlayTypeChange();
handleScalingModeChange();
handleAspectRatioChange();
updateImagePositionOptions();
updatePreview();
