const eyes = document.querySelectorAll('.eye')

document.addEventListener('mousemove', function(event)
{
    const mouseX = event.x
    const mouseY = event.y

    for(const eye of eyes)
    {
        const eyeX = eye.offsetLeft + eye.offsetWidth / 2
        const eyeY = eye.offsetTop + eye.offsetHeight / 2
        
        const deltaX = mouseX - eyeX
        const deltaY = mouseY - eyeY

        const angle = Math.atan2(deltaY, deltaX)
        const pupilX = Math.cos(angle) * 70
        const pupilY = Math.sin(angle) * 70
        
        const pupil = eye.children[0]
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`
    }
})