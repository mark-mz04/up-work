<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class getMainPageTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_render_main_page()
    {
        $this->seed();
        $response = $this->withExceptionHandling()->get('/');

        $response->assertStatus(200);
    }
}
