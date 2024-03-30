<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faixa;

class FaixaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Faixa::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Faixa::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Faixa::findOrfail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $faixa = Faixa::findOrfail($id);

        $faixa->update($request->all());

        return $faixa;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Faixa::destroy($id);
    }
}
