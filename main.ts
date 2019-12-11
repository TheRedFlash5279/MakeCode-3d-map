let map = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 . . . . . . . . 6 2 2 2 6 . . . . . . . . 6 6 . . . . . . . 6 
6 . 5 5 . . . . . 6 2 2 2 6 . . . . . . . . . . . . . 5 5 . . 6 
6 . 5 5 . . . . . 6 2 2 2 6 . . 6 6 6 6 . . . . . . . 5 5 . . 6 
6 . . . . . . . . 6 2 2 2 6 . . 6 6 2 6 6 6 6 6 . . . . . . . 6 
6 . . . . . . . . 6 2 2 2 6 . . 6 2 2 2 2 2 2 6 . . . . . . . 6 
6 6 . . 6 6 6 6 6 6 2 2 2 6 . . 6 2 2 2 2 2 2 6 6 6 6 6 6 6 6 6 
2 6 . . 6 2 2 2 2 2 6 6 6 6 . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 2 
2 6 . . 6 6 6 6 2 2 6 . . . . . . . . . . . . . . . . . . . 6 2 
2 6 . . . . . 6 2 2 6 . . . . . . . . . . . . . . . . . . . 6 2 
6 6 . . . . . 6 6 6 6 . . 6 . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 6 2 
6 . . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . 6 2 
6 . . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . 6 2 
6 6 6 6 6 . . . 6 6 6 6 6 6 . . 6 6 6 6 6 6 . . 6 6 6 6 6 6 6 6 
6 6 6 6 6 . . . 6 2 2 6 . . . . . . 6 2 2 6 . . 6 . . . . . . 6 
6 . . 6 6 . . . 6 2 2 6 . . 2 2 . . 6 6 6 6 . . 6 . . . . . . 6 
6 . . 6 6 . . . 6 2 2 6 . . 2 2 . . 6 . . . . . 6 . . 6 6 6 6 6 
6 . . 6 6 . . . 6 2 2 6 . . . . . . 6 . . . . . 6 . . 6 . . 6 2 
6 . . 6 6 . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 6 . . 6 2 
6 . . . . . . . . . . . . . 6 2 2 2 2 2 2 2 6 . . . . 6 . . 6 2 
6 . . . . . . . . . . . . . 6 2 2 2 2 2 2 2 6 . . . . 6 . . 6 2 
6 6 6 6 6 6 6 6 6 6 6 . . . 6 2 2 2 2 2 2 6 6 . . 6 6 6 . . 6 2 
6 . . . . . . . . . . . . . 6 6 2 2 2 2 2 6 . . . . . . . . 6 2 
6 . . . . . . . . . . . . . . 6 6 6 6 6 6 6 . . . . . . . . 6 2 
6 6 6 6 6 6 6 6 6 . . 6 . . . 6 6 . . . . . . . 6 6 6 6 . . 6 6 
6 . . . . . . . 6 . . 6 6 . . 6 6 . . . . . . . 6 . . . . . . 6 
6 . . . . . . . 6 6 6 6 6 . . 6 6 . . 6 6 6 6 6 6 . . . . . . 6 
6 . . . . . . . . . . . . . . 6 6 . . . . . . . 6 . . . . . . 6 
6 . 5 5 . . . . . . . . . . . 6 6 . . . . . . . 6 . . 5 5 . . 6 
6 . 5 5 . . . . 6 6 6 6 6 . . . . . . 6 6 6 6 . 6 . . 5 5 . . 6 
6 . . . . . . . 6 2 2 2 6 . . . . . . 6 2 2 2 2 6 . . . . . . 6 
6 6 6 6 6 6 6 6 6 2 2 2 6 6 6 6 6 6 6 6 2 2 2 2 6 6 6 6 6 6 6 6 
`
let OldMap = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 5 6 5 6 6 6 3 6 6 6 3 6 6 6 6 6 3 6 6 
6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . 7 . . . 5 . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . 7 . . . 6 . . 7 7 7 7 7 7 7 7 7 7 . . . . 6 6 6 6 6 6 6 
6 . . . 1 . . . 6 . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 6 
6 . . . 2 . . . 6 . . 6 6 6 6 6 . . . . . . . 7 . . . . . . . 6 
6 . . . 7 . . . 6 . . . . . . 6 . . . . . . . 4 . . . . . . . 6 
6 . . . 1 . . . 6 4 6 6 4 6 6 6 . . . . . . . 7 . . . . . . . 6 
6 . . . 7 . . . . . . . . . . . . . . . . . . 7 . . . . . . . 6 
6 6 6 6 6 6 6 6 6 6 6 5 6 6 6 5 6 6 . . 6 6 5 6 6 6 6 5 6 6 6 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 4 7 7 7 . . . . 6 
6 . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . 6 
6 . . . . 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 7 7 7 2 7 7 7 7 7 7 1 7 7 7 7 1 7 7 7 2 7 7 7 . . . . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 6 
6 . . . . . . . . . . 7 7 7 . . . . . . . . . 7 7 7 7 7 7 7 7 6 
6 . . 6 . . . . 7 7 7 7 . . . . . . . . . . . . . . . . . . . 6 
6 . . 6 . . . . 6 . . . . . 7 7 7 7 7 . . . . 7 7 7 . . . . . 6 
6 . . 6 . . . . 6 . . . . . 7 . . . 7 7 . . . 7 . 7 7 . . . . 6 
6 . . 6 . . . . 6 . . . . . 7 7 . . . 7 . . . . 7 . 7 7 . . 7 6 
6 . . 6 . . . . 6 6 7 . . . . 7 . . . 7 . . . 7 . . . 7 . . 7 6 
6 . . 6 . . . . . . 7 7 7 . . 7 . . . 7 7 7 7 7 . . . 7 7 7 7 6 
6 . . 6 . . . . . . . . 7 7 7 7 . . . . . . . . . . . . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
let textures = [img`
c d c d d d c c 
d d b d d d d c 
d b d d d d d b 
b b b d c c d b 
d b d b d d c c 
d d b d b b b c 
c d c b d d b c 
c c b b c c c c 
`, null, img`
c c c c c c c c c c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 
c c c c c c c c c c c c c c c c c c c c 8 b b b b b b b b b b 8 
c c c c c c c c c c c c c c c c c c c c 8 b b b b b b b b b b 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c 8 b b b b b b b b b b 8 
8 a a a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b 8 
8 a a a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b 8 
8 a a a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b 8 
8 a a a a a a a a a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b 8 
8 a a a a a a a a a a a 8 8 b b b b b b 8 a a a 8 b b b b b b 8 
8 a a a a a a a a a a a 8 8 b b b b b b 8 a a a 8 b b b b b b 8 
8 a a a a a a a a a a a 8 8 b b b b b b 8 a a a 8 b b b b b b 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b 8 a a a 8 b b b b b b 8 
c c c c c c c c c c c c c 8 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 
c c c c c c c c c c c c c 8 b b b b b b b b b b 8 c c c c c c c 
c c c c c c c c c c c c c 8 b b b b b b b b b b 8 c c c c c c c 
c c c c c c c c c c c c c 8 b b b b b b b b b b 8 c c c c c c c 
c c c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 a a a a a a a a a 8 c c c c c c c 8 b b b b b b b b b b b b 8 
8 8 8 8 8 8 8 8 8 8 8 c c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`, null, img`
c d c d d d c c 
d d b d d d d c 
d b d d d d d b 
b b b d c c d b 
d b d b d d c c 
d d b d b b b c 
c d c b d d b c 
c c b b c c c c 
`, null, img`
c d c d d d c c 
d d b d d d d c 
d b d d d d d b 
b b b d c c d b 
d b d b d d c c 
d d b d b b b c 
c d c b d d b c 
c c b b c c c c 
`, null, img`
c d c d d d c c 
d d b d d d d c 
d b d d d d d b 
b b b d c c d b 
d b d b d d c c 
d d b d b b b c 
c d c b d d b c 
c c b b c c c c 
`, null, img`
8 b a a a 8 b b b c c 8 c a 8 b 
a a c 6 6 b 8 c c c f 8 c c a a 
a c 6 c c 8 8 f c a f f f c c a 
b 6 6 c c f f f c a a f f c c a 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
8 a c a a c f f a a b 8 f f c a 
a c c c b a f f f a b b c c 6 c 
6 a c a b b a f f 6 6 a b 6 c a 
c a c c c b b b 6 6 a c c c c a 
b 6 a a a c a b b c c 6 c c 8 a 
b b 6 a 8 c c c c c c a 6 a a a 
`, img`
8 b a a a 8 b b b c c 8 c a 8 b 
a a c 6 6 b 8 c c c f 8 c c a a 
a c 6 c c 8 8 f c a f f f c c a 
b 6 6 c c f f f c a a f f c c a 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
8 a c a a c f f a a b 8 f f c a 
a c c c b a f f f a b b c c 6 c 
6 a c a b b a f f 6 6 a b 6 c a 
c a c c c b b b 6 6 a c c c c a 
b 6 a a a c a b b c c 6 c c 8 a 
b b 6 a 8 c c c c c c a 6 a a a 
`, img`
8 b a a a 8 b b b c c 8 c a 8 b 
a a c 6 6 b 8 c c c f 8 c c a a 
a c 6 c c 8 8 f c a f f f c c a 
b 6 6 c c f f f c a a f f c c a 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
8 a c a a c f f a a b 8 f f c a 
a c c c b a f f f a b b c c 6 c 
6 a c a b b a f f 6 6 a b 6 c a 
c a c c c b b b 6 6 a c c c c a 
b 6 a a a c a b b c c 6 c c 8 a 
b b 6 a 8 c c c c c c a 6 a a a 
`, img`
8 b a a a 8 b b b c c 8 c a 8 b 
a a c 6 6 b 8 c c c f 8 c c a a 
a c 6 c c 8 8 f c a f f f c c a 
b 6 6 c c f f f c a a f f c c a 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
8 a c a a c f f a a b 8 f f c a 
a c c c b a f f f a b b c c 6 c 
6 a c a b b a f f 6 6 a b 6 c a 
c a c c c b b b 6 6 a c c c c a 
b 6 a a a c a b b c c 6 c c 8 a 
b b 6 a 8 c c c c c c a 6 a a a 
`]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
function tofpx(n: number) {
    return (n * fpx_scale) | 0
}
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    st.updateControls()
})
