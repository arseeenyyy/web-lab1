package lab1;

public class Checker {
    
    public static boolean hit(int x, float y, float r) {
        return inSquare(x, y, r) || inTriangle(x, y, r) || inCircle(x, y, r);
    }

    private static boolean inSquare(int x, float y, float r) {
        return x <= 0 && y <= 0 && -x <= r && -y <= r;
    }

    private static boolean inTriangle(int x, float y, float r) {
        return x >= 0 && y >= 0 && x <= r/2 && y <= r/2;
    }

    private static boolean inCircle(int x, float y, float r) {
        return x >= 0 && y <= 0 && x <= r && -y <= r;
    }
}
